import PropTypes from 'prop-types';
import Button from '../Button';

import { Form, ButtonContainer } from './styles';

export default function ContactForm({
  onSubmit,
  children,
  labelButton,
  disabled,
}) {
  return (
    <Form onSubmit={onSubmit} noValidate>
      {children}
      <ButtonContainer>
        <Button type="submit" disabled={disabled}>{labelButton}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  children: PropTypes.node.isRequired,
  labelButton: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

ContactForm.defaultProps = {
  disabled: true,
};
