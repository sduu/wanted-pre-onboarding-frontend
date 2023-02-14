import React from 'react';
import { Input, Label } from './InputItem.style';

const InputItem = ({ label, onChange, type, id, value, placeholder, inputRef }) => {
  return (
    <>
      {label && <Label htmlFor={`${id}-input`}>{label}</Label>}
      <Input
        onChange={e => onChange?.(e)}
        ref={inputRef}
        type={type}
        id={`${id}-input`}
        value={value}
        placeholder={placeholder}
        data-testid={`${id}-input`}
      />
    </>
  );
};

export default InputItem;
