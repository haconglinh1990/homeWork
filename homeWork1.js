function validUserName(name){
    if(name.value.trim().length < 6){
        alert("User Name must have more than 6 character !!!");
        name.focus();
    }
}

function validEmail(email){
    var filter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!filter.test(email.value)){
        alert("Email wrong syntax !!!");
        email.focus();
    }
}

function validPassword(password){
    var filter = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]))/;

    if(!filter.test(password.value)){
        alert("Password wrong syntax !!!");
        password.focus();
    }
}

function validRePassword(rePassword){
    if(rePassword.value !== document.getElementById("password").value){
        alert("2 Password is not the same, please re-type !!!");
        document.getElementById("password").focus();
    }
}
