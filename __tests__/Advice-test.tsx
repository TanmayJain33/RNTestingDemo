/**
 * @format
 */

import 'react-native';
import React from 'react';
import Advice from '../src/Advice';
import {render, fireEvent} from '@testing-library/react-native';

describe('Advice', () => {
  describe('clicking Get another advice!', () => {
    it('renders new advice', () => {
      const {getByText} = render(<Advice />);
      fireEvent.press(getByText('Get another advice!')); //used to test events
    });
  });
});
