import { Link } from 'react-router-dom';

import {
  Container,
  InputSearchContainer,
  Header,
  Card,
  ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>

      <InputSearchContainer>
        <input
          type="search"
          placeholder="Pesquise pelo nome..."
        />
      </InputSearchContainer>

      <Header>
        <strong>3 Contatos</strong>

        <Link to="/new">Novo Contato</Link>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            Nome
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="info-header">
              <strong>Mateu Silva</strong>
              <small>Instagram</small>
            </div>

            <span>mateus@devacademy.com.br</span>
            <span>(41) 99999-9999</span>
          </div>

          <div className="actions">
            <Link to="/edit/42432">
              <img src={edit} alt="Edit Contact" />
            </Link>

            <button type="button">
              <img src={trash} alt="Delete Contact" />
            </button>
          </div>
        </Card>
      </ListContainer>

    </Container>
  );
}
