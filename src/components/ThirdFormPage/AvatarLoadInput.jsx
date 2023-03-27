import { useContext } from 'react';
import { FormContext } from '../../store/FormContext';
import { changeInputInfo } from '../../store/reducer';
const AvatarLoadInput = () => {
  const { dispatch, state } = useContext(FormContext);

  return (
    <div className="file-input-container">
      <input
        type="file"
        name="avatar"
        accept="image/png,image/jpeg"
        max-size="2MB"
        id="avatar-input"
        onChange={(e) => {
          dispatch(
            changeInputInfo(
              'avatar',
              URL.createObjectURL(e.target.files[0]),
              false
            )
          );
          e.target.value = '';
        }}
      />
      <label htmlFor="avatar-input" className="control-btn">
        Upload Photo
      </label>
      {state.form.avatar.error && state.form.avatar.wasFocused && (
        <div className="error">Please, choose your avater</div>
      )}
    </div>
  );
};

export default AvatarLoadInput;
