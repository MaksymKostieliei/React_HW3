import React, { useContext } from 'react';
import { FormContext } from '../../store/FormContext';
import { changeInputInfo } from '../../store/reducer';

const Avatar = ({ avatar }) => {
  const { dispatch, state } = useContext(FormContext);

  return (
    <label
      onClick={(e) => {
        dispatch(changeInputInfo('avatar', e.target.value, false));
      }}
    >
      <input
        type="radio"
        name="avatar"
        value={avatar}
        checked={state.form.avatar.value === avatar}
        onChange={(e) => {
          return;
        }}
        hidden
      />
      <img src={avatar} alt="default avatar 2" />
    </label>
  );
};

export default Avatar;
