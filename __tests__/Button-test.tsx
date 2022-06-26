import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {ButtonComponent} from '../src/components/Button';

//Check if the submit button is working properly
it('should press the button', () => {
  //mock function
  const onPress = jest.fn();
  const {getByText} = render(
    <ButtonComponent text="Submit" onPress={onPress} />,
  );
  const submitButton = getByText('Submit');
  fireEvent.press(submitButton);
  //Check if the submit button's onPress is called when pressed
  expect(onPress).toHaveBeenCalled();
});

//Check if the submit button is not called when disabled
it('should not clickable when disabled', () => {
  //mock function
  const onPress = jest.fn();
  const {getByText} = render(
    <ButtonComponent text="Submit" onPress={onPress} disabled />,
  );
  const submitButton = getByText('Submit');
  fireEvent.press(submitButton);
  //Check if the submit button's onPress not called when disabled
  expect(onPress).not.toHaveBeenCalled();
});
