export default class HandleErrorService {
    constructor() { }

    validateEmail(emailInput) {
        let regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let valid = regEmail.test(emailInput);
        if (!valid) {
            return "Invalid email";
        }
    }

    validateEmptyField(inputObject) {
        //for (const key in inputObject) {
        if (inputObject === "") {
            return "All fields must be filled.";

        }
        // }
    }

    validateInputLength(input, numOfChar) {
        if (!input || input.length < numOfChar) {
            return "The input is short.";
        }
    }
    validateInputMatch(firstInput, secondInput) {
        if (firstInput !== secondInput) {
            return "Password does not match.";
        }
    }

}

