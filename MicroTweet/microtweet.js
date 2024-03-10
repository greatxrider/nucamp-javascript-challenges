const inputEl = document.querySelector('input');
inputEl.addEventListener('keyup', fixLength);

function fixLength() {
    const inputValue = inputEl.value;
    if (inputValue.length > 12) {
        const newArr = inputValue.slice(0, inputValue.length-1);
        inputEl.value = newArr;
    } else {
        return;
    }
}
