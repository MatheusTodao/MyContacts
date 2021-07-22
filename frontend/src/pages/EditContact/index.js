import ContactForm from '../../components/ContactForm';
import PageHeader from '../../components/PageHeader';
import FormGroup from '../../components/FormGroup';

import Input from '../../components/Input';
import Select from '../../components/Select';

export default function EditContact() {
  return (
    <>
      <PageHeader title="Editar Contato" />
      <ContactForm labelButton="Salvar Alterações">
        <FormGroup>
          <Input
            placeholder="Nome"
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholder="E-mail"
          />
        </FormGroup>

        <FormGroup>
          <Input
            placeholder="Telofone"
          />
        </FormGroup>

        <FormGroup>
          <Select>
            <option value="1">Instragram</option>
            <option value="2">LinkInd</option>
            <option value="3">Facebook</option>
            <option value="4">Twitter</option>
          </Select>
        </FormGroup>
      </ContactForm>
    </>
  );
}
