import React from 'react';
import { LinkedWrapper } from './Linked.style';

const Linked = ({ children, to }) => {
  return <LinkedWrapper to={to}>{children}</LinkedWrapper>;
};

export default Linked;
