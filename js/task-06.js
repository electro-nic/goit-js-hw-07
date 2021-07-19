const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('change', (event) => {
    if (Number(inputEl.dataset.length) !== inputEl.value.length) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
    else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
});