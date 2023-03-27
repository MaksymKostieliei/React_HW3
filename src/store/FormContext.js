import { createContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const FormContext = createContext(null);

export function FormProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      {props.children}
    </FormContext.Provider>
  );
}
