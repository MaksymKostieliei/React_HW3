import { useContext, useEffect, useCallback, useRef } from 'react';
import { FormContext } from '../store/FormContext';

import { changeInputInfo } from '../store/reducer';
import FormGroup from './FormGroup';

const Inputs = ({ inputs, interDependent = false }) => {
  const { state, dispatch } = useContext(FormContext);

  const setInputInfo = useCallback(
    (fieldName, fieldValue, fieldPattern) => {
      const fieldError = !fieldPattern.test(fieldValue);
      dispatch(changeInputInfo(fieldName, fieldValue, fieldError));
    },
    [dispatch]
  );

  const changedField = useRef(true);

  useEffect(() => {
    if (interDependent) {
      inputs.forEach((input) => {
        const name = input.name;
        const value = state.form[name].value;
        const pattern = input.pattern;

        setInputInfo(name, value, pattern);
      });
    }
  }, [changedField.current]);

  return inputs.map((input) => {
    const handleInputChange = (e) => {
      const { value, name } = e.target;
      setInputInfo(name, value, input.pattern);

      if (interDependent) {
        changedField.current = !changedField.current;
      }
    };

    return <FormGroup {...input} key={input.id} onChange={handleInputChange} />;
  });
};

export default Inputs;
