import React, { useContext } from 'react';
import { FormContext } from '../../store/FormContext';

import Avatars from './Avatars';
import AvatarPreview from './AvatarPreview';
import AvatarLoadInput from './AvatarLoadInput';
import Controls from '.././Controls';

const ThirdFormPage = () => {
  const { state } = useContext(FormContext);

  return (
    <div className="file-part">
      <h1 className="heading">Крок: {state.currentPage}</h1>
      <AvatarLoadInput />
      {state.form.avatar.value && <AvatarPreview />}
      <Avatars />
      <Controls inputsToValidate={['avatar']} />
    </div>
  );
};

export default ThirdFormPage;
