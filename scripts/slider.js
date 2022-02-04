let slideIndex = 1;

const formURL = "https://ip-dev.art/order.php";

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

function openPopup(popup) {
  popup.classList.add('popup_is-opened');
// debugger;
  const popupForm = popup.querySelector('.popup__input-form');

  function closePopup(popup) {
    popup.classList.remove('popup_is-opened');

    document.removeEventListener("keydown", closeByEscape);
    popupCloseButton.removeEventListener('click', closeByButton);
    popup.removeEventListener('click', closeByOverlay);
    popupForm.removeEventListener('submit', handleSave);
  }

  function closeByEscape(event) {
    if (event.key === "Escape") {
      closePopup(popup);
    }
  }

  function closeByButton() {
    closePopup(popup);
  }

  function closeByOverlay(event) {
    if (event.target === popup) {
        closePopup(popup);
    }
  }

  function handleSave(event) {
        // debugger;
    event.preventDefault();
    const formData = new FormData(popupForm);
    const [name, phone] = Array.from(formData.values());
    const elementModel = {};
  
    if (cardInputName.value !== '') {
    //   elementModel.name = cardInputName.value;
    //   elementModel.link = cardInputLink.value;
      sendOrder(elementModel);
    }

    closePopup(popup);
  }

  document.addEventListener("keydown", closeByEscape);
  popupCloseButton.addEventListener('click', closeByButton);
  popup.addEventListener('click', closeByOverlay);
  popupForm.addEventListener('submit', handleSave);
}
  
sendOrderButton.addEventListener('click', () => {
// cardInputLink.value = '';
// cardInputName.value = '';
openPopup(cardPopup);
});