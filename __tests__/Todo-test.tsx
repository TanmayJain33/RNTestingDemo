import React from 'react';
import Todo from '../src/Todo';
import {render, fireEvent} from '@testing-library/react-native';

//create a todo item
it('should create a todo item', () => {
  //render Todo Component
  const {getByText, getByPlaceholderText} = render(<Todo />);
  //Check for any + text as a button
  const addItemButton = getByText('+');
  //Check for TextInput which has placeholder 'New todo...'
  const textInput = getByPlaceholderText('New Todo...');
  //Check if we can write text in TextInput
  fireEvent.changeText(textInput, 'Todo 1');
  //Check if add button is pressable
  fireEvent.press(addItemButton);
  //Check if todo exist
  const createdItem = getByText('Todo 1');
  expect(createdItem).not.toBeNull();
});

//create multiple todo items

//delete a todo item

//should show an error text whenever todo text is empty

//should dissappear when a valid todo is created
