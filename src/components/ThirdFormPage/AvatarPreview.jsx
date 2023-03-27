import { useContext } from 'react';
import { FormContext } from '../../store/FormContext';

const AvatarPreview = () => {
  const { state } = useContext(FormContext);

  return (
    <>
      <p>Your avatar:</p>
      <img src={state.form.avatar.value} alt="avatar" width="100px" />
    </>
  );
};

export default AvatarPreview;
