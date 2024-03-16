const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    const inputValue = event.currentTarget.value.trim();
    if (inputValue) {
        return output.textContent = inputValue
    }
    else {
        return output.textContent = "Anonymous"
    }
});