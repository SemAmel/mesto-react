import React from "react";
import PopupWithForm from "./PopupWithForm";

const AddPlacePopup = ({isOpen, onClose, onAddPlace}) => {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  return (
    <PopupWithForm 
    title={'Новое место'} 
    name={'add-item'}
    buttonText={'Создать'}
    isOpen={isOpen} 
    onClose={onClose}
    onSubmit={handleSubmit}>
      <input 
      className="popup__input popup__input_type_place-name" 
      id="input-place-name" 
      type="text" 
      name="place-name" 
      placeholder="Название" 
      minLength="2" 
      maxLength="30"
      ref={nameRef}
      required />
      <span className="input-place-name-error popup__input-error"></span>
      <input 
      className="popup__input popup__input_type_link" 
      id="input-link" 
      type="url" 
      name="link" 
      placeholder="Ссылка на картинку" 
      ref={linkRef}
      required />
      <span className="input-link-error popup__input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;