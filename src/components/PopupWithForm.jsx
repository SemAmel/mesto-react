import React from 'react';

function PopupWithForm(props){
  
  const handleClose = () => {
    props.onClose(false);
  }

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`} onClick={handleClose}>
        <div className="popup__container" onClick={(e) => e.stopPropagation()}>
          <h2 className="popup__title">{props.title}</h2>
          <form className="popup__form" name={`form_${props.name}`} formNoValidate>
            {props.children}
          </form>
          <button className="popup__close-button" type="button" onClick={handleClose}></button>
        </div>
      </div>
  );
}

export default PopupWithForm;