const form = document.querySelector(".login-form");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    const formValues = {
        email,
        password,
    };
    console.log(formValues);

    if (email === "" || password === "") {
        return console.log("All form fields must be filled in");
    }

    event.currentTarget.reset();
});
