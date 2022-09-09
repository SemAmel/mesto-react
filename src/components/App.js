import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});
  //const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [isPopupClose, setIsPopupClose] = React.useState(true);

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsPopupClose(false);
  }

  const closeAllPopups = () => {
    setIsPopupClose(true);
  }

  return (
    <>
      <div className="page">
    
        <Header />

        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} 
        />

        <Footer />

      </div>

      <PopupWithForm title={'Редактировать профиль'} name={'edit-profile'} isOpen={isEditProfilePopupOpen} onClose={setIsEditProfilePopupOpen}>
        <input className="popup__input popup__input_type_name" id="input-name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="input-name-error popup__input-error"></span>
        <input className="popup__input popup__input_type_about" id="input-about" type="text" name="about" placeholder="Описание" minLength="2" maxLength="200" required />
        <span className="input-about-error popup__input-error"></span>
        <button className="popup__button popup__button_type_save" type="submit">Сохранить</button>
      </PopupWithForm>

      <PopupWithForm title={'Новое место'} name={'add-item'} isOpen={isAddPlacePopupOpen} onClose={setIsAddPlacePopupOpen}>
        <input className="popup__input popup__input_type_place-name" id="input-place-name" type="text" name="place-name" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="input-place-name-error popup__input-error"></span>
        <input className="popup__input popup__input_type_link" id="input-link" type="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="input-link-error popup__input-error"></span>
        <button className="popup__button popup__button_type_create-item" type="submit">Создать</button>
      </PopupWithForm>

      <PopupWithForm title={'Обновить аватар'} name={'edit-avatar'} isOpen={isEditAvatarPopupOpen} onClose={setIsEditAvatarPopupOpen}>
        <input className="popup__input popup__input_type_link" id="input-avatar-link" type="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="input-avatar-link-error popup__input-error"></span>
        <button className="popup__button popup__button_type_edit-avatar" type="submit">Сохранить</button>
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={!isPopupClose} onClose={closeAllPopups} />

      <div className="popup popup_type_delete">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <button className="popup__button popup__button_type_delete">Да</button>
          <button className="popup__close-button" type="button"></button>
        </div>
      </div>
    </>
   
  );
}

export default App;
