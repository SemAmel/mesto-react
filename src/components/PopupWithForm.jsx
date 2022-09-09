import React from 'react';

function PopupWithForm({isOpen, onClose, name, title, buttonText, children}){

  return (
    <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} onClick={onClose}>
        <div className="popup__container" onClick={(e) => e.stopPropagation()}>
          <h2 className="popup__title">{title}</h2>
          <form className="popup__form" name={`form_${name}`}>
            {children}
            <button className="popup__button" type="submit">{buttonText}</button>
          </form>
          <button className="popup__close-button" type="button" onClick={onClose}></button>
        </div>
      </div>
  );
}

export default PopupWithForm;