console.log('Add validation!');

let form = document.querySelectorAll("div.input-field")
let formIsValid;



function markFormAsInvalid() {
    formIsValid= false;
}


function validatePhoneNumber() {
    const numberInput = document.querySelector("#phone-input");
    const number = numberInput.value;
    const parentEl = numberInput.parentElement;
    const numPat = new RegExp("^[0-9]{10}$|^[0-9]{3}-[0-9]{3}-[0-9]{4}$")
    let numTest = true; 

    if (numPat.test(number)) {
        parentEl.classList.remove("input-invalid")
        parentEl.classList.add("input-valid")
    }
    else {
        parentEl.classList.remove("input-valid")
        parentEl.classList.add("input-invalid")
        markFormAsInvalid();
    }
}
