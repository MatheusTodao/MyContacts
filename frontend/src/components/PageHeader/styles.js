import styled from 'styled-components';

export const Container = styled.header`
  margin-bottom: 45px;
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-bottom: 16px;
    width: 15px;

    span {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;
      margin-left: 8px;
    }

    img {
      transform: rotate(-90deg);
    }
  }
`;
