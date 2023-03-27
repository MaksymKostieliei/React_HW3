import React, { useContext } from 'react';
import { FormContext } from '../store/FormContext';
import Controls from './Controls';
import Inputs from './Inputs';

const FormPage = ({ pageInputs, prev, interDependent }) => {
  const { state } = useContext(FormContext);

  const inputsToValidate = pageInputs
    .filter((input) => input.required === true)
    .map((input) => input.name);

  return (
    <>
      <h1 className="heading">Крок: {state.currentPage}</h1>
      <Inputs inputs={pageInputs} interDependent={interDependent} />
      <Controls prev={prev} inputsToValidate={inputsToValidate} />
    </>
  );
};

export default FormPage;
