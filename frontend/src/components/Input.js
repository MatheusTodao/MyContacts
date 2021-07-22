import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  height: 52px;
  background: #FFF;
  border: none;
  border: 2px solid #FFF;
  padding: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  transition: border-color .25s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}

`;
