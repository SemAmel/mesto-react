import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards ] = React.useState([]);

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

  const handleUpdateUser = ({name, about}) => {
    api.editUserInfo(name, about)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`${err}`); 
      });
    closeAllPopups();
  }

  const handleUpdateAvatar = ({link}) => {
    api.editUserAvatar(link)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(`${err}`); 
      });
    closeAllPopups();
  }

  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    if (isLiked){
      api.deleteLikeCard(card._id)
        .then((newCard) => {
        setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
        })
        .catch((err) => {
          console.log(`${err}`); 
        });
    } else {
      api.likeCard(card._id)
        .then((newCard) => {
          setCards((state) => state.map((item) => item._id === card._id ? newCard : item));
        })
        .catch((err) => {
          console.log(`${err}`); 
        });
    }
  }

  const handleCardDelete = (card) => {
    api.deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((item) => item._id !== card._id));
      })
      .catch((err) => {
        console.log(`${err}`); 
      });
  }

  const handleAddPlaceSubmit = ({name, link}) => {
    api.addNewCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]); 
      })
      .catch((err) => {
        console.log(`${err}`); 
      });
    closeAllPopups();
  }

  React.useEffect(() => {
    Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
    .then(([UserInfo, InitialCards]) => {
      setCurrentUser(UserInfo);
      setCards(InitialCards);
    })
    .catch((err) => {
      console.log(`${err}`);
    });
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
      
        <Header />

        <Main 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick} 
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

      </div>

      <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} /> 

      <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />

      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />

      <ImagePopup card={selectedCard} isOpen={isImagePopupOpen} onClose={closeAllPopups} />

    </CurrentUserContext.Provider>
   
  );
}

export default App;
