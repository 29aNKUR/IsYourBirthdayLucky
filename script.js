const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output-box");


function compareValues(sum,luckyNumber){
    if(sum%luckyNumber === 0){
        outputBox.innerText = "Your Birthday is lucky! 🥳";
    }
    else{
        outputBox.innerText = "Your Birthday is not lucky! 😷";
    }
}

function checkBirthdayIsLucky(){
    const dob =  dateOfBirth.value;
    const sum = calculateSum(dob);
    // if(sum%luckyNo === 0){
    //     console.log("Your Birthday is lucky! ");
    // }
    // else{
    //     console.log("Your Birthday is not lucky! ");
    // }
    if(sum&&dob)
    compareValues(sum,luckyNumber.value);
    else
    outputBox.innerText = "Please enter both the fields! 😡"
}

function calculateSum(dob){
    var sum = 0;
    dob = dob.replaceAll("-","");
    for(var i = 0 ; i<dob.length;i++){
        sum+=dob.charAt(i);
    }
    return sum;
}


checkNumberButton.addEventListener("click",checkBirthdayIsLucky)