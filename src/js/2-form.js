const form = document.querySelector(".feedback-form");
 const localStorageKey = "feedback-form-state";
const textarea = form.querySelector("textarea");

const formData ={
    email: "",
    message: "",
}

if(JSON.parse(localStorage.getItem(localStorageKey)) != null) {
    const savedData = JSON.parse(localStorage.getItem(localStorageKey));
    textarea.value = savedData.message;
    form.email.value = savedData.email;
} else {
    console.log("Fill please all fields");
}

form.addEventListener("input", (event) => {
    
    formData.message = textarea.value;
    formData.email = form.email.value;
    console.log(formData);
    localStorage.setItem(localStorageKey, JSON.stringify(formData));

})



form.addEventListener("submit", (event) => {
    if (form.email.value === "" || textarea.value === "") {
        console.log("Please fill in all the fields!");
        return;
    }
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    form.reset();
})

    