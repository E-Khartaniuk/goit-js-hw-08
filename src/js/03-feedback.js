var throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form ');
const emailEl = document.querySelector('.feedback-form input');
const messageEl = document.querySelector('.feedback-form textarea');

formEl.addEventListener('input', throttle(formFeedBack, 500));
formEl.addEventListener('submit', onFormSubmit);

const userSavedLocalStorage = JSON.parse(
  localStorage.getItem('feedback-form-state')
);

if (userSavedLocalStorage) {
  messageEl.value = userSavedLocalStorage.message;
  emailEl.value = userSavedLocalStorage.email;
}

function formFeedBack() {
  let formEmailValue = emailEl.value;
  let formMessageValue = messageEl.value;

  const userLocalStorageData = {
    email: formEmailValue,
    message: formMessageValue,
  };

  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(userLocalStorageData)
  );
}

function onFormSubmit(events) {
  events.preventDefault();
  formEl.reset();

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

  localStorage.removeItem('feedback-form-state');
}
