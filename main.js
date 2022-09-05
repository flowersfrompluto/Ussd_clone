// DECLARE VARIABLES

let operator=document.getElementById("operator")
let operatorError = document.getElementById("operatorError")
let select = document.getElementById("select")
let bankNetwork = document.getElementById("bankNetwork")
let accountNum = document.getElementById("accountNum")
let enterAmount = document.getElementById("enterAmount")
let pin = document.getElementById("pin")
let selectError = document.getElementById("selectError")
let banknetworkError = document.getElementById("banknetworkError")
let accountnumError = document.getElementById("accountnumError")
let enteramountError = document.getElementById("enteramountError")
let pinError = document.getElementById("pinError")
let messageTxt = document.getElementById("messageTxt")
let verify = document.getElementById("verify")

// CHANGE EVENT LISTENER

select.addEventListener("change", function(){
    if(select.value == "Bank"){
        networkBank.innerHTML = "Enter Bank Name"
        mobileNum.innerHTML = "Enter Account Number"
        amount.innerHTML = "Enter Transfer Amount"
        password.innerHTML = "Enter PIN"
    }else if(select.value == "Network"){
        networkBank.innerHTML = "Enter Network"
        mobileNum.innerHTML = "Enter Phone Number"
        amount.innerHTML = "Enter Airtime Amount"
        password.innerHTML = "Enter PIN"
    }else if(select.value == ""){
        networkBank.innerHTML = ""
        mobileNum.innerHTML = ""
        amount.innerHTML = ""
        password.innerHTML = ""
    }
})


// EVENT LISTENER

verify.addEventListener("click", function (){

    validateData()
})

function validateData(){

    if (operator.value == ""){
        operatorError.innerHTML = "*Please select a service"
    }else {
        operatorError.innerHTML = ""
    }

    if (select.value == ""){
        selectError.innerHTML = "*Please select a service"
    }else {
        selectError.innerHTML = ""
    }

    if (bankNetwork.value == ""){
        banknetworkError.innerHTML = "*Field Required"
    }else {
        banknetworkError.innerHTML = ""
    }

    if (accountNum.value == ""){
        accountnumError.innerHTML = "*Field Required"
    }else {
        accountnumError.innerHTML = ""
    }

    if (enterAmount.value == ""){
        enteramountError.innerHTML = "*field Required"
    }else {
        enteramountError.innerHTML = ""
    }

    if (pin.value == "") {
        pinError.innerHTML = "*Field Required"
    }else{
        pinError.innerHTML = ""
    }
    
    if (operator.value != "" &&  accountNum.value != "" && enterAmount.value != "" && pin.value != "" && bankNetwork.value != "" && select.value != ""){
        transfer()
    }

    
}

function transfer(){

    if(operator.value === "Transfer"){
        if(select.value === "Bank"){
            if(bankNetwork.value  == "Access Bank" || bankNetwork.value == "UBA" || bankNetwork.value == "Zenith Bank" || bankNetwork.value == "GTB" || bankNetwork.value == "Fidelity Bank" || bankNetwork.value == "Access Diamond" || bankNetwork.value == "FCMB" || bankNetwork.value == "Keystone Bank"){      
                if(accountNum.value != ""){
                    if(enterAmount.value <= 20000){
                        if(pin.value == 0000 || pin.value == 1234 || pin.value == 1995 || pin.value == 4177){
                            messageTxt.innerHTML="Transfer Successful !"
                            messageTxt.style.color="yellowgreen"
                            messageTxt.style.fontSize="17px"
                            endService()
                        }else(
                            pinError.innerHTML = "<i>Incorrect Pin !</i>"
                        )
                    }else(
                        enteramountError.innerHTML = "<i>Transfer amount exceeded !</i>"
                    )
                }
            }else{
                banknetworkError.innerHTML="<i>Input right Bank! bank name is case sensitive</i>"
            }
        }else{
            selectError.innerHTML="Choose right option"
        }
    }else if(operator.value === "Airtime"){
        if(select.value === "Network"){
            if(bankNetwork.value  == "MTN" || bankNetwork.value == "Airtel" || bankNetwork.value == "Glo" || bankNetwork.value == "9Mobile" || bankNetwork.value == "mtn" || bankNetwork.value == "airtel" || bankNetwork.value == "glo" || bankNetwork.value == "9mobile"){
                if(accountNum.value != "") {
                    if(enterAmount.value <= 5000){
                        if(pin.value == 0000 || pin.value == 1234 || pin.value == 1995 || pin.value == 4177){
                            messageTxt.innerHTML="Airtime Purchase Successful !"
                            messageTxt.style.color="yellowgreen"
                            messageTxt.style.fontSize="17px"
                            endService()
                        }else(
                            pinError.innerHTML = "<i>Incorrect Pin !</i>"
                        )
                    }else(
                        enteramountError.innerHTML = "<i>Airtime amount exceeded !</i>"
                    )
                }
            }else{
                banknetworkError.innerHTML="<i>Input right network !</i>"
            }
        }else{
            selectError.innerHTML="Choose right option"
        }
    }else {
        messageTxt.innerHTML="*Transaction failed, please try again !"
        endService()
    }
    
}

function endService(){

    operator.value = ""
    accountNum.value = ""
    enterAmount.value = ""
    pin.value = ""
    bankNetwork.value = ""
    select.value = ""
}