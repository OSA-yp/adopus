function addMenu(Items){
  menuItems.forEach(function (menuItem){
    // console.log(menuItem);
  });

}

addMenu(menuItems);


/// Обработчики на основной странице
const popup = document.querySelector('#callbackPopup');
// событие по клик на кнопке редактирования профиля
const editButton = document.querySelector('#consultationButton');
editButton.addEventListener('click', function () {
  clearAddPopup();
  openPopup(popup);
});

// обработка закрытия попапов по клику вне формы
const popupList = Array.from(document.querySelectorAll('.popup'))
popupList.forEach((singlePopup) => {
  singlePopup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(singlePopup);
    }
  });
});


/// Общие события для всех попапов
// крестик закрыти попапа, добавляется на все попапы по очереди
const closePopupButton = document.querySelectorAll('.popup__close');
closePopupButton.forEach(function (item) {
  item.addEventListener('click', function (event) {
    const popup = event.target.closest('.popup');
    closePopup(popup);
  });
})


// Обработчики для формы добавления элемента-картинки
// событие по кнопке сохранить
const addPlaceForm = document.querySelector('#callbackForm');
addPlaceForm.addEventListener('submit', callbackFormSubmitHandler);

// обработчик сабмита
function callbackFormSubmitHandler (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // тут отправка почты
}


// открыть любой попап
function openPopup(popup) {
  clearFormErrors(popup);
  popup.classList.add('popup_opened');
  popup.addEventListener('keydown', closePopupOnEscape);
}

// закрыть любой попап
function closePopup(popup){
  popup.classList.remove('popup_opened');
  popup.removeEventListener('keydown', closePopupOnEscape);
}


// очистить попап добавления элемента-картинки
const popupAddPlaceName = document.querySelector('#callbackFormName');
const callbackFormContact = document.querySelector('#callbackFormContact');
const callbackFormMessage = document.querySelector('#callbackFormMessage');
function clearAddPopup(){
  // сброс предыдущих значений полей попапа
  popupAddPlaceName.value = '';
  callbackFormContact.value = '';
  callbackFormMessage.value = '';
}


// обработка закрытия попапов по эскейп
function closePopupOnEscape(evt) {
  if (evt.key === 'Escape') {
    closePopup(evt.target.closest('.popup'));
  }
}

