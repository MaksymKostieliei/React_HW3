// Define initial state
const createInitialInputState = () => {
  return {
    value: '',
    error: true,
    wasFocused: false,
  };
};

export const initialState = {
  form: {
    firstName: createInitialInputState(),
    lastName: createInitialInputState(),
    email: createInitialInputState(),
    city: createInitialInputState(),
    street: createInitialInputState(),
    house: createInitialInputState(),
    avatar: createInitialInputState(),
    password: createInitialInputState(),
    submitPassword: createInitialInputState(),
  },
  currentPage: 1,
  theme: 'light',
};

// Define  action types as constants
export const SET_INPUT_INFO = 'SET_INPUT_INFO';
export const SET_WAS_FOCUSED = 'SET_WAS_FOCUSED';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

// Define reducer
export function reducer(state, action) {
  switch (action.type) {
    case SET_INPUT_INFO:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.fieldName]: {
            ...state.form[action.payload.fieldName],
            value: action.payload.fieldValue,
            error: action.payload.fieldError,
          },
        },
      };
    case SET_WAS_FOCUSED:
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.fieldName]: {
            ...state.form[action.payload.fieldName],
            wasFocused: true,
          },
        },
      };
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
}

// Define action creators
export const changeInputInfo = (fieldName, fieldValue, fieldError) => ({
  type: SET_INPUT_INFO,
  payload: { fieldName, fieldValue, fieldError },
});

export const setWasFocused = (fieldName) => ({
  type: SET_WAS_FOCUSED,
  payload: { fieldName },
});

export const nextPage = () => ({ type: NEXT_PAGE });

export const prevPage = () => ({ type: PREV_PAGE });
