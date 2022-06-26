import React from 'react';
import {render} from '@testing-library/react-native';
import {TextField} from '../src/components/FormComponent';

//Check if text input label is rendering
it('should render a label', () => {
  const {queryByText, getByText} = render(<TextField label="Test Label" />);
  expect(queryByText('asdf')).toBeNull();
  expect(getByText('Test Label')).not.toBeNull();
});

//Check if props are passed in TextInput
it('should forward remaining props to underlying TextInput', () => {
  const {getByTestId} = render(
    <TextField label="Test Label" passedProp="yes" />,
  );
  expect(getByTestId('Form.TextInput').props).toEqual(
    expect.objectContaining({passedProp: 'yes'}),
  );
});
