import { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import FormGroup from '../../components/FormGroup';

import Input from '../../components/Input';
import Select from '../../components/Select';

import isEmailValid from '../../utils/isEmailValid';
import useError from '../../hooks/useErrors';

export default function NewContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const { setError, removeError, getErrorMessageByFieldName } = useError();

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Name is required.' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'This e-mail is invalid.' });
    } else {
      removeError('email');
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({
      name, email, phone, category,
    });
  }

  function handlePhoneChange(event) {
    setPhone(event.target.value);

    if (!event.target.value) {
      setError({ field: 'phone', message: 'Phone is required.' });
    } else {
      removeError('phone');
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm
        labelButton="Cadastrar"
        onSubmit={handleSubmit}
      >
        <FormGroup error={getErrorMessageByFieldName('name')}>
          <Input
            placeholder="Nome"
            value={name}
            onChange={handleNameChange}
            error={getErrorMessageByFieldName('name')}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('email')}>
          <Input
            value={email}
            placeholder="E-mail"
            onChange={handleEmailChange}
            error={getErrorMessageByFieldName('email')}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('phone')}>
          <Input
            placeholder="Telefone"
            value={phone}
            onChange={handlePhoneChange}
            error={getErrorMessageByFieldName('phone')}
          />
        </FormGroup>

        <FormGroup>
          <Select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
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
