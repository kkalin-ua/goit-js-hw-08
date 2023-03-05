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
    textEmail: document.querySelector('.feedback-form')[0],
    formMessage: document.querySelector('.feedback-form')[1],
}
// console.log(refs);


refs.form.addEventListener('submit', onFormSubmit)
// refs.textEmail.addEventListener('input', onEmailInput)
refs.textEmail.addEventListener('input', throttle(onEmailInput, 500))
// refs.textEmail.addEventListener('input', throttle(() => {onEmailInput}, 500));
refs.formMessage.addEventListener('input', throttle(onMessageInput, 500));

function onFormSubmit(event) {
    event.preventDefault();

    console.log('отправка форми');
    event.currentTarget.reset();
    localStorage.removeItem('feedbeckEmailInput');
    localStorage.removeItem('feedbeckMessageInput');
}

function onEmailInput(event) {
    const mesEmai = event.currentTarget.value;
    localStorage.setItem('feedbeckEmailInput', mesEmai);
}


function onMessageInput(event) {
    const mes = event.currentTarget.value;
    localStorage.setItem('feedbeckMessageInput', mes);
}


function savedMassage() {
  const feedbeckMessageInput = localStorage.getItem('feedbeckMessageInput')
  if (feedbeckMessageInput) {
    // console.log(feedbeckMessageInput);
    refs.formMessage.value = feedbeckMessageInput
  }

  const feedbeckEmailInput = localStorage.getItem('feedbeckEmailInput')
  if (feedbeckEmailInput) {
    console.log(feedbeckEmailInput);
    refs.textEmail.value = feedbeckEmailInput; 
  }
}
savedMassage()

















