import styled, { css } from 'styled-components';

export default styled.button`
  height: 52px;
  background: ${({ theme }) => theme.colors.primary.main};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  outline: none;
  padding: 0 16px;

  transition: background .25s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: ${({ theme }) => theme.colors.primary.lighter};
    cursor: not-allowed;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }

  `}

`;
