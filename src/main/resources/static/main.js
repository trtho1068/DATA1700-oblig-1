let form = document.querySelector("#ticket-order");
let tickets = JSON.parse(sessionStorage.getItem("tickets"));
tickets ||= [];  // if false (null), empty array

let inputNumber = document.querySelector("#number");
let inputFirstName = document.querySelector("#firstname");
let inputLastName = document.querySelector("#lastname");
let inputPhoneNumber = document.querySelector("#phone-number");
let inputEmail = document.querySelector("#email");

let errorNumber = document.querySelector("#error-number")
let errorFirstName = document.querySelector("#error-firstname");
let errorLastName = document.querySelector("#error-lastname");
let errorPhoneNumber = document.querySelector("#error-phone-number");
let errorEmail = document.querySelector("#error-email");

let buttonBuyTickets = document.querySelector("#buy-tickets");
let buttonDeleteTickets = document.querySelector("#delete-tickets");


function Ticket(formData) {
    return {
        number: parseInt(formData.get("number")),
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        phoneNumber: formData.get("phone-number"),
        email: formData.get("email"),
    };
}


inputNumber.addEventListener("input", (event) => {
    if (inputNumber.value && !inputNumber.checkValidity()) {
        errorNumber.textContent = "Ugyldig antall"
    } else {
        errorNumber.textContent = "";
    }
});


inputFirstName.addEventListener("input", (event) => {
    if (inputFirstName.value && !inputFirstName.checkValidity()) {
        errorFirstName.textContent = "Ugyldig fornavn";
    } else {
        errorFirstName.textContent = "";
    }
});


inputLastName.addEventListener("input", (event) => {
    if (inputLastName.value && !inputLastName.checkValidity()) {
        errorLastName.textContent = "Ugyldig etternavn";
    } else {
        errorLastName.textContent = "";
    }
});


inputPhoneNumber.addEventListener("input", (event) => {
    if (inputPhoneNumber.value && !inputPhoneNumber.checkValidity()) {
        errorPhoneNumber.textContent = "Ugyldig telefonnr";
    } else {
        errorPhoneNumber.textContent = "";
    }
});


inputEmail.addEventListener("input", (event) => {
    if (inputEmail.value && !inputEmail.checkValidity()) {
        errorEmail.textContent = "Ugyldig epost addresse";
    } else {
        errorEmail.textContent = "";
    }
});


buttonBuyTickets.addEventListener("click", (event) => {
    if (form.checkValidity()) {
        let ticket = new Ticket(new FormData(form));
        tickets.push(ticket);
        form.reset();
        sessionStorage.setItem("tickets", JSON.stringify(tickets));
    }
});

buttonDeleteTickets.addEventListener("click", (event) => {
    // Are you sure?...
    // Surprised to learn that there is no method array.clear
    tickets.splice(0, tickets.length);
    sessionStorage.removeItem("tickets");
});
