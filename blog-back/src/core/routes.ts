import bodyParser from 'body-parser';
import express from 'express';
import io from 'socket.io';
import cors from 'cors';

import { BlogsController, UserController } from '../controllers';
import { loginValidation, registerValidation } from '../utils/validations';
// import { checkAuth, checkAuthUser, rateLimit } from '../middlewares';
import { checkAuthUser } from '../middlewares';

const routes = (app: express.Express, io?: io.Socket) => {
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
  app.set('trust proxy', true);

  //   app.options('/user/me', cors);

  app.use(cors());
  app.use('/user/me', (req, res, next) => {
    checkAuthUser(req, res, next);
  });
  app.use('/user/blog/*', (req, res, next) => {
    checkAuthUser(req, res, next);
  });

  app.get('/user/me', UserController.getMe);
  app.get('/user/verify', UserController.verify);
  //   app.get('/user/google', UserController.google);
  //   app.get('/user/google/callback', UserController.googleRedirect);
  app.post('/user/signup', registerValidation, UserController.create);
  app.post('/user/signin', loginValidation, UserController.login);
  app.get('/user/find', UserController.findUsers);
  app.get('/user/:id', UserController.show);
  app.delete('/user/:id', UserController.delete);

  app.post('/user/blog/favorites', UserController.addFavoriteBlog);

  app.post('/blog', BlogsController.create);
  app.get('/blog', BlogsController.get);
  app.get('/blog/search', BlogsController.search);
};

export default routes;
