import React, { useContext } from 'react';
import { FormContext } from '../store/FormContext';

const FinalPage = () => {
  const { state } = useContext(FormContext);
  const form = state.form;
  return (
    <>
      <h1 className="heading">Дякуємо за реєстрацію</h1>
      <img src={state.form.avatar.value} alt="avatar" width="100px" />
      <p>Контактна інформація</p>
      <p>Name: {form.firstName.value}</p>
      <p>Lastame: {form.lastName.value}</p>
      <p>Email: {form.email.value}</p>
      <p>City: {form.city.value}</p>
      <p>Street: {form.street.value}</p>
      <p>House: {form.house.value}</p>
    </>
  );
};

export default FinalPage;
