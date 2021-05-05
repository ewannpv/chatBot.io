import React from 'react';

import { DataContext } from './initalState';

const Button = ({ id }) => (
  <DataContext.Consumer>
    {({ handleClick }) => (
      <button type="button" onClick={() => handleClick(id)}>Click me</button>
    )}
  </DataContext.Consumer>
);

export default Button;
