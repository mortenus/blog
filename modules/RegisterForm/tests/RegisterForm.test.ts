import { render, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import RegisterFormContainer from './RegisterFormContainer';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
mockedAxios.post.mockResolvedValue({
  status: 'success',
});

describe('RegisterFormContainer', () => {
  test('registers a user with valid credentials', async () => {
    const { getByLabelText, getByText } = render(<RegisterFormContainer />);

    const emailInput = getByLabelText('Email') as HTMLInputElement;
    const fullnameInput = getByLabelText('Full Name') as HTMLInputElement;
    const passwordInput = getByLabelText('Password') as HTMLInputElement;
    const confirmPasswordInput = getByLabelText('Confirm Password') as HTMLInputElement;

    // Fill in the registration form with valid credentials
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(fullnameInput, { target: { value: 'John Doe' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    // Submit the registration form
    fireEvent.click(getByText('Register'));

    // Wait for the registration process to complete
    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith(
        'http://localhost:3001/user/signup',
        expect.objectContaining({
          email: 'test@example.com',
          fullname: 'John Doe',
          password: 'password123',
          password_2: 'password123',
        })
      );
    });

    // Assert that the user is redirected to the login page or the expected route
    expect(mockedRouter.push).toHaveBeenCalledWith('/auth/signin'); // Replace 'mockedRouter' with your router mock object
  });
});
