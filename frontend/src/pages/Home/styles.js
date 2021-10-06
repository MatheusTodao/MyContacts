import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  max-height: 100%;
  margin-bottom: 24px;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    padding: 0 16px;
    border: none;
    border-radius: 25px;
    outline: none;
    background: #FFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

    &::-webkit-search-cancel-button {
      appearance: none;
    }

    &::placeholder {
      color: #BCBCBC;
    }
  }

`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;

  strong {
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: 700;
    text-decoration: none;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all .25s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #FFF;
    }
  }
`;

export const ListContainer = styled.section`
  margin-top: 24px;

  header {
    margin-bottom: 16px;
    button {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;
      border: none;
      display: flex;
      align-items: center;
      background: transparent;

      img {
        margin-left: 8px;
      }
    }
  }

`;

export const ListHeader = styled.header`
  img {
    transform: ${({ orderBy }) => (
    orderBy === 'asc'
      ? 'rotate(180deg)'
      : 'rotate(-360deg)'
  )};
    transition: transform .35s ease;
  }
`;

export const Card = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #FFF;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  & + & {
    margin-top: 16px;
  }

  .info-header {
    display: flex;
    align-items: center;

    small {
      background: ${({ theme }) => theme.colors.primary.lighter};
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;
      border-radius: 4px;
      padding: 3px 6px;
      margin-left: 8px;
    }
  }

  span {
    display: block;
    color: ${({ theme }) => theme.colors.gray[200]};
    line-height: 24px;

  }

  .actions {
    display: flex;
    align-items: center;

    button {
      border: none;
      background: transparent;
      margin-left: 8px;
    }
  }
`;
