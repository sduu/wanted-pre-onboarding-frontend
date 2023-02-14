import styled from 'styled-components';

export const AuthFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    height: 3.6rem;
  }
`;

export const Button = styled.button`
  display: block;
  height: 4rem;
  margin-top: 4px;
  padding: 0 32px;
  border-radius: var(--border-radius);
  word-break: keep-all;
  color: var(--secondary);
  font-size: 1.6rem;
  font-weight: 700;
  background-color: var(--primary);

  :disabled {
    background-color: var(--primary-disabled);
  }
`;
