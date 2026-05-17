const form = document.querySelector(".feedback-form");
 const localStorageKey = "feedback-form-state";
const textarea = form.querySelector("textarea");

if(JSON.parse(localStorage.getItem(localStorageKey)) != null) {
    const savedData = JSON.parse(localStorage.getItem(localStorageKey));
    textarea.value = savedData.messege;
    form.email.value = savedData.email;
} else {
    console.log("Fill please all fields");
}

addEventListener("input", (event) => {
    localStorage.setItem(localStorageKey, JSON.stringify(formData));
    formData.messege = textarea.value;
    formData.email = form.email.value;
    console.log(formData);

})



addEventListener("submit", (event) => {
    if (form.email.value === "" || textarea.value === "") {
        console.log("Please fill in all the fields!");
        return;
    }
    event.preventDefault();
    localStorage.removeItem(localStorageKey);
    form.reset();
})

const formData ={
    email: "",
    messege: "",
}