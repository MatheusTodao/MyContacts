import { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import FormGroup from '../../components/FormGroup';

import Input from '../../components/Input';
import Select from '../../components/Select';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';
import useError from '../../hooks/useErrors';

export default function NewContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [category, setCategory] = useState('');

  const {
    errors,
    setError,
    removeError,
    getErrorMessageByFieldName,
  } = useError();

  const isDisable = (name && phone && errors.length === 0);

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
    // console.log({
    //   name, email, phone, category,
    // });
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));

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
        disabled={!isDisable}
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
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={handleEmailChange}
            error={getErrorMessageByFieldName('email')}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('phone')}>
          <Input
            type="tel"
            maxLength="15"
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
            <option value="">Categoria</option>
            <option value="1">Instragram</option>
            <option value="2">Linkedin</option>
            <option value="3">Facebook</option>
            <option value="4">Twitter</option>
          </Select>
        </FormGroup>

      </ContactForm>
    </>
  );
}
