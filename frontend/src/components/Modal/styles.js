import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
`;

export const Container = styled.div`
  width: 80%;
  max-width: 453px;
  padding: 24px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 22px;
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 32px;


  .cancel-button {
    border: none;
    background: transparent;
    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray[200]};
    font-size: 16px;
  }
`;
