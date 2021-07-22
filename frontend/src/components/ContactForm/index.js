import PropTypes from 'prop-types';
import Button from '../Button';

import { Form, ButtonContainer } from './styles';

export default function ContactForm({ onSubmit, children, labelButton }) {
  return (
    <Form onSubmit={onSubmit}>
      {children}
      <ButtonContainer>
        <Button type="submit">{labelButton}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  children: PropTypes.node.isRequired,
  labelButton: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
