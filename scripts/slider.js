let slideIndex = 1;

function showSlideByNumber(slideNumber) {
    let i = 0;
    const slides = document.querySelectorAll('.card__slider-item');
    const colors = document.querySelectorAll('.card__item-color');

    if (slideNumber > slides.length) {
        slideIndex = 1;
    }
    if (slideNumber < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        colors[i].className = colors[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    colors[slideIndex - 1].className += " active";
}

function showNextSlide() {
    showSlideByNumber(slideIndex += 1);
}

function showPrevSlide() {
    showSlideByNumber(slideIndex -= 1);
}

function showSlide(slideNumber) {
    showSlideByNumber(slideIndex = slideNumber);
}

showSlideByNumber(slideIndex);
// debugger;
const cardPopup = document.querySelector('.popup_type-card');

const profileSaveButton = document.querySelector('.popup__input-btn_type-profile');
const profileInputName = document.querySelector('.popup__input-text_name');
const profileInputDescription = document.querySelector('.popup__input-text_description');

const cardInputName = document.querySelector('.popup__input-text_title');
const cardInputLink = document.querySelector('.popup__input-text_link');
const cardSaveButton = document.querySelector('.popup__input-btn_type-card');
const sendOrderButton = document.querySelector('.card__order-btn');

const popupCloseButton = document.querySelector('.popup__close');

// const formElements = ;

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
// debugger;
  const popupForm = popup.querySelector('.popup__input-form');

  function closePopup(popup) {
    popup.classList.remove('popup_is-opened');
  }

  function closeByEscape(event) {
    if (event.key === "Escape") {
      closePopup(popup);
      document.removeEventListener("keydown", closeByEscape);
    }
  }

  function closeByButton() {
    closePopup(popup);
    popupCloseButton.removeEventListener('click', closeByButton);
  }

  function closeByOverlay(event) {
    if (event.target === popup) {
        closePopup(popup);
        popup.removeEventListener('click', closeByOverlay);
    }
  }

  document.addEventListener("keydown", closeByEscape);
  popupCloseButton.addEventListener('click', closeByButton);
  popup.addEventListener('click', closeByOverlay);

  function sendPopupCardOrder() {
    //   debugger;
    const elementModel = {};
  
    if (cardInputName.value !== '') {
    //   elementModel.name = cardInputName.value;
    //   elementModel.link = cardInputLink.value;
      sendOrder(elementModel);
    }
    closePopup(cardPopup);
  }

  popupForm.addEventListener('submit', event => {
    event.preventDefault();
    savePopupCardElement();
  });
}
  
sendOrderButton.addEventListener('click', () => {
// cardInputLink.value = '';
// cardInputName.value = '';
openPopup(cardPopup);
});