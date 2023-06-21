import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import LoginFormContainer from '../containers/LoginForm';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.post.mockResolvedValue({
  data: {
    token: 'mockedToken',
  },
});

describe('LoginFormContainer', () => {
  test('logs in a user with valid credentials', async () => {
    const { getByLabelText, getByText } = render(<LoginFormContainer /> as React.ReactElement););

    const emailInput = getByLabelText('Email') as HTMLInputElement;
    const passwordInput = getByLabelText('Password') as HTMLInputElement;

    // Fill in the login form with valid credentials
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Submit the login form
    fireEvent.click(getByText('Login'));

    // Wait for the login process to complete
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        'http://localhost:3001/user/signin',
        expect.objectContaining({
          email: 'test@example.com',
          password: 'password123',
        }),
      );
    });

    // Assert that the user is redirected to the homepage or the expected route
    expect(mockedRouter.push).toHaveBeenCalledWith('/'); // Replace 'mockedRouter' with your router mock object
  });
});
