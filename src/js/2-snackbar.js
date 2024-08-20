import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
    event.preventDefault();

    const inputDelay = event.target.elements.delay;
    const inputState = event.target.elements.state;

    const delay = Number(inputDelay.value);
    const state = inputState.value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
    .then((delay) => {
      iziToast.success({
        backgroundColor: 'light-green',
        message: `✅ Fulfilled promise in ${delay}ms`,
      });
    })
    .catch((delay) => {
      iziToast.error({
        backgroundColor: 'light-red',
        message: `❌ Rejected promise in ${delay}ms`,
      });
    });
    inputDelay.value = '';
})
