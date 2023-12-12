import React from 'react';
import { render, screen } from '@testing-library/react';

import Home from './Home';


it('should render the Login component', () => {
  render(<Home/>);
  });

  it('should render the Login component', () => {
    const { render } = renderWithProviders(<Home />);
    // Assert that the component renders without errors
    expect(render).toMatchSnapshot();
  });
  