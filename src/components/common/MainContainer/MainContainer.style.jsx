import styled from 'styled-components';

export const MainContainerWrapper = styled.main`
  width: calc(100% - 40px);
  max-width: 750px;
  padding: 36px;
  margin: 0 auto;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 1.4rem;
  background-color: #fff;

  h1 {
    margin-bottom: 16px;
    letter-spacing: -0.1rem;
    color: var(--primary);
    font-size: 2.8rem;
    font-weight: 700;
  }
`;
