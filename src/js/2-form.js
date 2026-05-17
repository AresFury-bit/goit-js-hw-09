const form = document.querySelector(".feedback-form");
 const localStorageKey = "feedback-form-state";
const textarea = form.querySelector("textarea");

const formData ={
    email: "",
    message: "",
}
const saveData = JSON.parse(localStorage.getItem(localStorageKey));
if(saveData) {
    
    textarea.value = saveData.message;
    form.elements.email.value = saveData.email;
}

form.addEventListener("input", (event) => {
    
    formData.message = textarea.value;
    formData.email = form.elements.email.value;
    console.log(formData);
    localStorage.setItem(localStorageKey, JSON.stringify(formData));

})



form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.elements.email.value.trim() === "" || textarea.value.trim() === "") {
        console.log("Please fill in all the fields!");
        return;
    }
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    formData.email = "";
    formData.message = "";
    form.reset();
})

