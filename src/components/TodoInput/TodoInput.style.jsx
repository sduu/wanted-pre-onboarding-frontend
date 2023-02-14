import styled from 'styled-components';

export const TodoInputWrapper = styled.form`
  display: flex;
  gap: 8px;
  margin-bottom: 8px;

  input {
    flex: 1 1 auto;
  }

  label {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    clip-path: inset(50%);
  }
`;

export const Button = styled.button`
  height: 3.6rem;
  padding: 0 32px;
  border-radius: var(--border-radius);
  word-break: keep-all;
  color: var(--secondary);
  font-size: 1.6rem;
  background-color: var(--primary);
`;
