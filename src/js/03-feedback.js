// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли 
// користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких 
// зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. 
// В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message 
// та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і 
// використовуй бібліотеку lodash.throttle.

// var throttle = require('lodash.throttle');
import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form')[0],
    message: document.querySelector('.feedback-form')[1],
}
// console.log(refs);


// const KEY_EMAIL_INPUT = 'feedbeckEmailInput';
// const KEY_MESSAGE_INPUT = 'feedbeckMessageInput';
const FORM_FEEDBACK = 'FORM_FEEDBACK';
const formData = {};


refs.form.addEventListener('submit', onFormSubmit)



// refs.textEmail.addEventListener('input', throttle(onEmailInput, 500))
// refs.formMessage.addEventListener('input', throttle(onMessageInput, 500));



refs.form.addEventListener('input', throttle(onFormInput, 500))

function onFormInput(event) {
  // console.log(e.target.value); //ssss@sss.ssssss
  // console.log(e.target.name); // email

  formData[event.target.name] = event.target.value
  // console.log(formData); // email

  localStorage.setItem(FORM_FEEDBACK, JSON.stringify(formData));
}


function onFormSubmit(event) {
    event.preventDefault();

    const formInputs = JSON.parse(localStorage.getItem(FORM_FEEDBACK));
    let user = {'email': formInputs.email, 'message': formInputs.message}

    console.log(user);
    console.log('отправка форми');
    event.currentTarget.reset();
    localStorage.removeItem(FORM_FEEDBACK);
            
}

const formInputs = JSON.parse(localStorage.getItem(FORM_FEEDBACK));
// console.log(formInputs);
// console.log(formInputs.email);
if (formInputs) {
  if (formInputs.email) {
    // console.log(formInputs.email);
    refs.email.value = formInputs.email;
  }
  if (formInputs.message) {
    refs.message.value = formInputs.message;
  }
}





// // 9999999999999999999999999999999999999999999999999999
// // 9999999999999999999999999999999999999999999999999999

// function onFormSubmit(event) {
//   event.preventDefault();

//   let user = {'Emai': localStorage.getItem(KEY_EMAIL_INPUT), 'Message': localStorage.getItem(KEY_MESSAGE_INPUT)}
//   console.log(user);
//   console.log('отправка форми');
//   event.currentTarget.reset();
//   localStorage.removeItem(KEY_EMAIL_INPUT);
//   localStorage.removeItem(KEY_MESSAGE_INPUT);
  
// }

// function onEmailInput(event) {
//   const mesEmai = event.target.value;
//   localStorage.setItem(KEY_EMAIL_INPUT, mesEmai);
// }


// function onMessageInput(event) {
// // const ssss = event.target.value
// // console.log(ssss);

//   const mes = event.target.value;
//   localStorage.setItem(KEY_MESSAGE_INPUT, mes);
// }


// function savedMassage() {
// const feedbeckMessageInput = localStorage.getItem(KEY_MESSAGE_INPUT)
// if (feedbeckMessageInput) {
//   // console.log(feedbeckMessageInput);
//   refs.formMessage.value = feedbeckMessageInput
// }

// const feedbeckEmailInput = localStorage.getItem(KEY_EMAIL_INPUT)
// if (feedbeckEmailInput) {
//   // console.log(feedbeckEmailInput);
//   refs.textEmail.value = feedbeckEmailInput; 
// }
// }
// savedMassage()





