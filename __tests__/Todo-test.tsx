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
it('should create multiples todo items', () => {
  const {getByText, getByPlaceholderText} = render(<Todo />);
  const addItemButton = getByText('+');
  const textInput = getByPlaceholderText('New Todo...');
  //Todo Item 1
  fireEvent.changeText(textInput, 'Todo 1');
  fireEvent.press(addItemButton);
  const firstCreatedItem = getByText('Todo 1');
  expect(firstCreatedItem).not.toBeNull();
  //Todo Item 2
  fireEvent.changeText(textInput, 'Todo 2');
  fireEvent.press(addItemButton);
  const secondCreatedItem = getByText('Todo 2');
  expect(secondCreatedItem).not.toBeNull();
  //Todo Item 3
  fireEvent.changeText(textInput, 'Todo 3');
  fireEvent.press(addItemButton);
  const thirdCreatedItem = getByText('Todo 3');
  expect(thirdCreatedItem).not.toBeNull();
});

//delete a todo item
it('should delete a todo item', () => {
  //created a todo item
  const {getByText, getByPlaceholderText, queryByText} = render(<Todo />);
  const addItemButton = getByText('+');
  const textInput = getByPlaceholderText('New Todo...');
  fireEvent.changeText(textInput, 'Todo 1');
  fireEvent.press(addItemButton);
  //Check for any X text as a button
  const deleteItemButton = getByText('X');
  //Check if delete button is pressable
  fireEvent.press(deleteItemButton);
  //Check if there is any text 'Todo 1' in whole app
  const deletedItem = queryByText('Todo 1');
  //Check if the todo is deleted
  expect(deletedItem).toBeNull();
});

//should show an error text whenever todo text is empty
it('should show an error text whenever todo text is empty', () => {
  const {getByText} = render(<Todo />);
  const addItemButton = getByText('+');
  fireEvent.press(addItemButton);
  const errorMessage = getByText('Please insert a valid text');
  expect(errorMessage).not.toBeNull();
});

//should dissappear when a valid todo is created
