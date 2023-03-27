import React, { useContext } from 'react';
import { FormContext } from '../store/FormContext';

import FormPage from './FormPage';
import FinalPage from './FinalPage';
import ThirdFormPage from './ThirdFormPage';
import useInputs from '../useInputs';

const CurrentFormPage = () => {
  const { state } = useContext(FormContext);

  const { firstPageInputs, secondPageInputs, fourthPageInputs } = useInputs();

  switch (state.currentPage) {
    case 1:
      return <FormPage prev={false} pageInputs={firstPageInputs} />;
    case 2:
      return <FormPage pageInputs={secondPageInputs} />;
    case 3:
      return <ThirdFormPage />;
    case 4:
      return <FormPage pageInputs={fourthPageInputs} interDependent={true} />;
    case 5:
      return <FinalPage />;
    default:
      return null;
  }
};

export default CurrentFormPage;
