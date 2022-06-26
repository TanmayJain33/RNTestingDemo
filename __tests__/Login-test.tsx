import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import Login from '../src/Login';

it('renders correctly', () => {
  render(<Login />);
});

it('renders default elements', () => {
  const {getByText, getByPlaceholderText} = render(<Login />);
  getByPlaceholderText('john.doe@ecample.com');
  getByPlaceholderText('***');
  getByText('Submit');
  getByText("Don't have an account?");
  getByText('Create Account');
});

it('shows invalid input messages', () => {
  const {getByTestId, getByText} = render(<Login />);
  const submitButton = getByTestId('Login.Submit.Button');
  fireEvent.press(submitButton);
  const emailErrorMessage = getByText('Please enter your email address.');
  expect(emailErrorMessage).not.toBeNull();
});
