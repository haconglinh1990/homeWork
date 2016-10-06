var resultValidUserName, resultValidEmail, resultValidPassword, resultValidRePassword;


function vibrateAndNotify(taget) {

    taget.classList.add("vibrate");
    setTimeout(function () {
        taget.classList.remove("vibrate");
    }, 250);

    var notify = document.createElement('span');
    var textNotify = document.createTextNode("Wrong User Name Syntax !!!");
    alert.setAttribute('class', 'help-block');
    alert.appendChild(textNotify);
    document.getElementById("formUserName").appendChild(notify);
    setTimeout(function () {
        document.getElementById("formUserName").removeChild(notify);
    }, 1000);
}

function validUserName() {

    var valueUserName = document.getElementById("userName").value.trim();
    var formUserName = document.getElementById("formUserName");

    if (valueUserName.length < 6) {
        vibrateAndNotify(formUserName);
        resultValidUserName = false;

    } else {
        resultValidUserName = true;
    }

}




function validEmail() {
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!filter.test(email.value)) {
        email.classList.add("vibrate");

        var alert = document.createElement('span');
        var textAlert = document.createTextNode("Wrong Email Syntax !!!");
        alert.setAttribute('class', 'help-block');
        alert.appendChild(textAlert);
        document.getElementById("formEmail").appendChild(alert);


        setTimeout(function () {
            email.classList.remove("vibrate");
        }, 250);

        setTimeout(function () {
            document.getElementById("formEmail").removeChild(alert);
        }, 1000);

        resultEmail = false;

    } else {
        resultEmail = true;
    }
}

function validPassword() {
    var filter = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]))/;

    if (!filter.test(password.value)) {
        password.classList.add("vibrate");

        var alert = document.createElement('span');
        var textAlert = document.createTextNode("Wrong PassWord Syntax !!!");
        alert.setAttribute('class', 'help-block');
        alert.appendChild(textAlert);
        document.getElementById("formPassword").appendChild(alert);

        setTimeout(function () {
            password.classList.remove("vibrate");
        }, 250);

        setTimeout(function () {
            document.getElementById("formPassword").removeChild(alert);
        }, 1000);

        resultPassword = false;
    } else {
        resultPassword = true;
    }
}

function reValidPassword() {
    if (rePassword.value !== document.getElementById("password").value) {
        rePassword.classList.add("vibrate");

        var alert = document.createElement('span');
        var textAlert = document.createTextNode("Two PassWord are not the same !!!");
        alert.setAttribute('class', 'help-block');
        alert.appendChild(textAlert);
        document.getElementById("formRePassword").appendChild(alert);

        setTimeout(function () {
            password.classList.remove("vibrate");
        }, 250);

        setTimeout(function () {
            document.getElementById("formRePassword").removeChild(alert);
        }, 1000);

        document.getElementById("password").focus();

        resultRePassword = false;

    } else {
        resultRePassword = true;
    }
}

function register() {

    if ((resultUserName === false) || (resultEmail === false) || (resultPassword === false) || (resultRePassword === false)) {
        alert("Wrong Syntax, please check back");
    } else {
        window.location.replace("result.html");
    }

}
