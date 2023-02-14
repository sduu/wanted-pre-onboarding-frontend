import styled from 'styled-components';

export const TodoItemWrapper = styled.li`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  width: 100%;

  input[type='text'] {
    flex: 1 1 auto;
  }
`;

export const Input = styled.input`
  &:checked + span {
    text-decoration: line-through;
    color: var(--primary-disabled);
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
`;

export const Span = styled.span`
  display: block;
  margin-left: 8px;
  color: var(--primary);
  font-size: 1.6rem;
`;

export const Button = styled.button`
  min-width: 44px;
  height: 2.8rem;
  padding: 0 8px;
  border-radius: var(--border-radius);
  font-weight: 700;
  color: var(--primary);

  &:first-of-type {
    color: var(--secondary);
    background-color: var(--primary);
  }

  &:last-of-type {
    color: var(--primary);
    background-color: var(--secondary);
  }
`;
