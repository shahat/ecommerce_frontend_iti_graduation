var bankForm = document.getElementById("bankForm");
var inputs = bankForm.querySelectorAll("input");

var paymentsMethod = document.getElementById("paymentsMethod");
var paymentInputs = paymentsMethod.querySelectorAll("input");




function bankRadioFunc(radio){
    if(radio.id == "bankRadio"){
        inputsEnabled();
    }
    else{
        inputsDisabled();
    }
}
function inputsDisabled(){
    for (let i = 0 ; i < inputs.length; i++){
        inputs[i].disabled = true;
        console.log(inputs[i].disabled);
    }
}

function inputsEnabled(){
    for (let i = 0 ; i < inputs.length; i++){
        inputs[i].disabled = false;
        console.log(inputs[i].disabled);

    }
}