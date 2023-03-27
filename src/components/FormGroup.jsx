import { useContext } from 'react';
import { FormContext } from '../store/FormContext';
import { setWasFocused } from '../store/reducer';

const FormGroup = ({ label, id, errorMesage, pattern, ...inputProps }) => {
  const { state, dispatch } = useContext(FormContext);

  const wasFocused = state.form[id].wasFocused;
  const errorExists = state.form[id].error;
  const showError = errorExists && wasFocused;

  const inputClass = `form-control ${showError ? 'is-invalid' : ''}`;

  const handleInputBlur = () => {
    dispatch(setWasFocused(id));
  };

  const handleInputFocus = () => {
    if (id === 'submitPassword') {
      dispatch(setWasFocused(id));
    }
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        {...inputProps}
        className={inputClass}
        onBlur={handleInputBlur}
        onFocus={handleInputFocus}
        value={state.form[id].value}
        id={id}
      />
      {showError && <div className="error">{errorMesage}</div>}
    </div>
  );
};

export default FormGroup;
