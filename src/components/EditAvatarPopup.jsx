import React from "react";
import PopupWithForm from "./PopupWithForm";

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar}) => {
  const linkRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      link: linkRef.current.value,
    });
  } 

  return (
    <PopupWithForm 
      title={'Обновить аватар'} 
      name={'edit-avatar'} 
      buttonText={'Сохранить'}
      isOpen={isOpen} 
      onClose={onClose}
      onSubmit={handleSubmit}>
        <input 
        className="popup__input popup__input_type_link" 
        id="input-avatar-link" 
        type="url" 
        name="link" 
        placeholder="Ссылка на картинку" 
        ref={linkRef}
        required />
        <span className="input-avatar-link-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;