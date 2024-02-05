let form = document.querySelector("#ticket-order");
let tickets = [];

let inpFirstName = document.querySelector("#firstname");
let errorFirstName = document.querySelector("#error-firstname");

inpFirstName.addEventListener("input", (event) => {
    if (inpFirstName.value && !inpFirstName.checkValidity()) {
        errorFirstName.textContent = "Ugyldig fornavn";
    } else {
        errorFirstName.textContent = "";
    }
});


let inpLastName = document.querySelector("#lastname");
let errorLastName = document.querySelector("#error-lastname");

inpLastName.addEventListener("input", (event) => {
    if (inpLastName.value && !inpLastName.checkValidity()) {
        errorLastName.textContent = "Ugyldig etternavn";
    } else {
        errorLastName.textContent = "";
    }
});


let inpPhoneNumber = document.querySelector("#phone-number");
let errorPhoneNumber = document.querySelector("#error-phone-number");

inpPhoneNumber.addEventListener("input", (event) => {
    if (inpPhoneNumber.value && !inpPhoneNumber.checkValidity()) {
        errorPhoneNumber.textContent = "Ugyldig telefonnr";
    } else {
        errorPhoneNumber.textContent = "";
    }
});


let inpEmail = document.querySelector("#email");
let errorEmail = document.querySelector("#error-email");

inpEmail.addEventListener("input", (event) => {
    if (inpEmail.value && !inpEmail.checkValidity()) {
        errorEmail.textContent = "Ugyldig epost addresse";
    } else {
        errorEmail.textContent = "";
    }
});


function Ticket(formData) {
    return {
        number: formData.get("number"),
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        phoneNumber: formData.get("phone-number"),
        email: formData.get("email"),
    };
}


let btnBuyTickets = document.querySelector("#buy-tickets");

btnBuyTickets.addEventListener("click", (event) => {
    if (form.checkValidity()) {
        let ticket = new Ticket(new FormData(form));
        tickets.push(ticket);
    } else {
        console.log("Attempt to buy invalid ticket.")
    }
});


let btnDeleteTickets = document.querySelector("#delete-tickets");
btnDeleteTickets.addEventListener("click", (event) => {
    // Are you sure?...
    // Surprised to learn that there is no method array.clear
    tickets.splice(0, tickets.length);
});
