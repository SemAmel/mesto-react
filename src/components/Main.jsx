import bigEditButton from '../images/big-edit-button.svg';
import addButton from '../images/add-button.svg';
import api from '../utils/Api';
import React from 'react';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards ] = React.useState([]);
  
  React.useEffect(() => {
    Promise.all([api.getInitialUserInfo(), api.getInitialCards()])
      .then(([UserInfo, InitialCards]) => {
        setUserName(UserInfo.name);
        setUserDescription(UserInfo.about);
        setUserAvatar(UserInfo.avatar);
        setCards(InitialCards);
      })
      .catch((err) => {
        console.log(`${err}`); 
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img className="profile__avatar" src={userAvatar} alt="ваша аватарка" />
          <button className="profile__edit-avatar-button" type="button" onClick={props.onEditAvatar}><img className="profile__edit-avatar-img" src={bigEditButton} alt="изменить" /></button>
        </div>
        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <p className="profile__about">{userDescription}</p>
          <button className="profile__edit-button" type="button" onClick={props.onEditProfile}></button>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}><img className="profile__plus" src={addButton} alt="плюс" /></button>
      </section>

      <section className="gallery">
        <ul className="gallery__items">

          {cards.map((card) => 
            <Card card={card} key={card._id} handle={props.onCardClick} />
          )}

        </ul>
      </section>
    </main>
  );
}

export default Main;