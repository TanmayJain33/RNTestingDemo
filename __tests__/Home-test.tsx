/**
 * @format
 */

import 'react-native';
import React from 'react';
import Home from '../src/Home';
import {render, fireEvent} from '@testing-library/react-native';

describe('Home', () => {
  describe('clicking Get another advice!', () => {
    it('renders new advice', () => {
      const {getByText} = render(<Home />);
      fireEvent.press(getByText('Get another advice!')); //used to test events
    });
  });
});
