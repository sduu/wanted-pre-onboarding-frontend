import React from 'react';
import { ErrorMessageWrapper } from './ErrorMessage.style';

const ErrorMessage = ({ children }) => {
  return <ErrorMessageWrapper>{children}</ErrorMessageWrapper>;
};

export default ErrorMessage;
