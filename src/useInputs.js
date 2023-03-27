import { useContext } from 'react';
import { FormContext } from './store/FormContext';

const useInputs = () => {
  const { state } = useContext(FormContext);
  const firstPageInputs = [
    {
      label: 'Name',
      type: 'text',
      name: 'firstName',
      id: 'firstName',
      pattern: /.+/,
      errorMesage: 'Please enter your first name',
      required: true,
    },
    {
      label: 'Last name',
      type: 'text',
      name: 'lastName',
      id: 'lastName',
      pattern: /.+/,
      errorMesage: 'Please enter your last name',
      required: true,
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      id: 'email',
      pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorMesage: 'Please enter correct email address',
      required: true,
    },
  ];

  const secondPageInputs = [
    {
      label: 'City',
      type: 'text',
      name: 'city',
      id: 'city',
      pattern: /.+/,
      errorMesage: 'Please enter your city',
      required: true,
    },
    {
      label: 'Street',
      type: 'text',
      name: 'street',
      id: 'street',
      pattern: /.+/,
      errorMesage: 'Please enter your street',
      required: true,
    },
    {
      label: 'House',
      type: 'email',
      name: 'house',
      id: 'house',
      pattern: /.+/,
      errorMesage: 'Please enter your house',
      required: true,
    },
  ];

  const fourthPageInputs = [
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      id: 'password',
      pattern:
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[-_!@#$%^&*.,?])[A-Za-z\d\-_!@#$%^&*.,?]{8,}$/,
      errorMesage:
        'Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character (-_!@#$%^&*.,?)',
      required: true,
    },
    {
      label: 'Submit password',
      type: 'password',
      name: 'submitPassword',
      id: 'submitPassword',
      pattern: new RegExp('^' + state.form.password.value + '$'),
      errorMesage: 'Должно совпадать с паролем',
      required: true,
    },
  ];

  return { firstPageInputs, secondPageInputs, fourthPageInputs };
};

export default useInputs;
