
const controller = {}

controller.register = (data) => {

    if (data.firstName.trim() === "") {
        document.getElementById("first-name-error").innerText
            = "*Please input first name";
    }
    if (data.firstName.trim() === "") {
        document.getElementById("last-name-error").innerText
            = "*Please input last name";
    }
    if (data.firstName.trim() === "") {
        document.getElementById("email-error").innerText
            = "*Please input email";
    }
    if (data.firstName.trim() === "") {
        document.getElementById("password-error").innerText
            = "*Please input password";
    }
    if (data.firstName.trim() === "") {
        document.getElementById("confirm-password-error").innerText
            = "*Please confirm your password";
    }

}

controller.login = (data) => {
    if (data.firstName.trim() === "") {
        document.getElementById("email-error").innerText
            = "*Please input email";
    }
    if (data.firstName.trim() === "") {
        document.getElementById("password-error").innerText
            = "*Please input password";
    }
}


console.log("controller: ", controller);