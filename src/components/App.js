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
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);

  const [selectedCard, setSelectedCard] = React.useState({});

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
    setIsImagePopupOpen(true);
  }

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsImagePopupOpen(false);
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

      <PopupWithForm 
      title={'Редактировать профиль'} 
      name={'edit-profile'}
      buttonText={'Сохранить'}
      isOpen={isEditProfilePopupOpen} 
      onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_name" id="input-name" type="text" name="name" placeholder="Имя" minLength="2" maxLength="40" required />
        <span className="input-name-error popup__input-error"></span>
        <input className="popup__input popup__input_type_about" id="input-about" type="text" name="about" placeholder="Описание" minLength="2" maxLength="200" required />
        <span className="input-about-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm 
      title={'Новое место'} 
      name={'add-item'}
      buttonText={'Создать'}
      isOpen={isAddPlacePopupOpen} 
      onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_place-name" id="input-place-name" type="text" name="place-name" placeholder="Название" minLength="2" maxLength="30" required />
        <span className="input-place-name-error popup__input-error"></span>
        <input className="popup__input popup__input_type_link" id="input-link" type="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="input-link-error popup__input-error"></span>
      </PopupWithForm>

      <PopupWithForm 
      title={'Обновить аватар'} 
      name={'edit-avatar'} 
      buttonText={'Сохранить'}
      isOpen={isEditAvatarPopupOpen} 
      onClose={closeAllPopups}>
        <input className="popup__input popup__input_type_link" id="input-avatar-link" type="url" name="link" placeholder="Ссылка на картинку" required />
        <span className="input-avatar-link-error popup__input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />
    </>
   
  );
}

export default App;
