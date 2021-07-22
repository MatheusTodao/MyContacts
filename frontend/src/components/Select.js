import styled from 'styled-components';

export default styled.select`
  width: 100%;
  height: 52px;
  border: none;
  border: 2px solid #FFF;
  background: #FFF;
  padding: 0 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  font-size: 16px;
  outline: none;
  appearance: none;

  transition: border-color .25s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main}
  }

`;
