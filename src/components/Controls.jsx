import { useContext } from 'react';
import { FormContext } from '../store/FormContext';
import { nextPage, prevPage, setWasFocused } from '../store/reducer';

const Controls = ({
  next = true,
  prev = true,
  nextText = 'NEXT',
  inputsToValidate = [],
}) => {
  const { dispatch, state } = useContext(FormContext);
  const allValidated = inputsToValidate.every(
    (input) => state.form[input].error === false
  );

  const handleNextClick = (e) => {
    e.preventDefault();
    if (allValidated) {
      dispatch(nextPage());
    } else {
      inputsToValidate.forEach((input) => {
        dispatch(setWasFocused(input));
      });
    }
  };

  return (
    <div className="control-btns">
      {prev && (
        <button
          className="control-btn"
          onClick={() => {
            dispatch(prevPage());
          }}
        >
          PREV
        </button>
      )}
      {next && (
        <button
          className={`control-btn ${allValidated ? '' : 'disabled-btn'}`}
          onClick={handleNextClick}
        >
          {nextText}
        </button>
      )}
    </div>
  );
};

export default Controls;
