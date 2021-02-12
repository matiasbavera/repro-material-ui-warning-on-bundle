import { render } from '@testing-library/react';
import React from 'react';
import { Problematic } from '../lib/problematic';

it('smoke test', () => {
  render(<Problematic />);
});