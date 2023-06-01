// Show Password Function

function showPass(num){
    let x = document.getElementById("password");
    let y = document.getElementById("confirm");
    if(num == 0){
        if(x.type === "password"){
            x.type = "text";
        }
        else{
            x.type = "password"
        }
    }
    else if(num == 1){
        if(y.type === "password"){
            y.type = "text";
        }
        else{
            y.type = "password"
        }
    }
}

// Validation Function 

function validate(){
    const form = document.forms['memberForm'];
    const name = form['name'].value;
    const email = form['email'].value;
    const password = form['password'].value;
    const confirm = form['confirm'].value;
    const gender = form['gender'].value;
    const tnc = form['tnc'].checked;
    const daily = form['letter'].checked;

    let msg = '';
    let dailyMsg = '';
    if(!name || !email || !password || !confirm || !gender){
        msg = "All field must be filled";
    }
    else if(name.length < 8){
        msg = "Name must be minimum 8 characters";
    }
    else if(password.length < 8){
        msg = "Password must be minimum 8 characters";
    }
    else if(confirm !== password){
        msg = "Password does not match";
    }
    else if(!gender){
        msg = "Please choose your gender";
    }
    else if(!tnc){
        msg = "You must agree to our terms and conditions";
    }
    if(daily){
        dailyMsg = "Daily letters will be sent to your email!";
    }

    if(msg){
        document.getElementById('errorMsg').innerHTML = msg;
        return false;
    }
    else{
        msg = "Registration success! Thank you for joining!";
        document.getElementById('errorMsg').innerHTML = msg;
        document.getElementById('dailyMsg').innerHTML = dailyMsg;
        return false;
    }
}