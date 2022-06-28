import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Login from '../src/Login';

it('renders correctly', () => {
  render(<Login />);
});

it('renders default elements', () => {
  const {getByText, getByPlaceholderText, getAllByText} = render(<Login />);
  getByPlaceholderText('john.doe@example.com');
  getByPlaceholderText('***');
  getAllByText('Login');
  getByText("Don't have an account?");
  getByText('Create Account');
});

it('shows invalid input messages', () => {
  const {getByTestId, getByText} = render(<Login />);
  const loginButton = getByTestId('Login.Submit.Button');
  fireEvent.press(loginButton);
  const emailErrorMessage = getByText('Invalid email.');
  expect(emailErrorMessage).not.toBeNull();
});
