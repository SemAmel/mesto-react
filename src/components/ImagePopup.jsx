

function ImagePopup(props){

  const handleClose = () => {
    props.onClose();
  }

  return (
    <div className={`popup popup_type_enlargement ${props.isOpen && 'popup_opened'}`} onClick={handleClose}>
      <div className="popup__field" onClick={(e) => e.stopPropagation()}>
        <img className="popup__big-image" alt="большая картинка места" src={props.card.link} />
        <h3 className="popup__place-name">props.card.name</h3>
        <button className="popup__close-button" type="button" onClick={handleClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;