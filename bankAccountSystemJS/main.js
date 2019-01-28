let inputs = document.querySelectorAll('.input');
let balanceMessage = document.querySelector('.text-reset');
let selectWithdraw = document.querySelector('.withdraw');

let account = [12345,7000];


const submit = (event) => {
    event.preventDefault();
    let accNumber = inputs[0].value;
    let accBalance = inputs[1].value;
    let accWithdraw = inputs[2].value;
    if(parseInt(accNumber) === account[0]){
        if(accBalance === 'Balance') {
            balanceMessage.textContent = account[1];
        }
         if (accWithdraw === 'Withdraw'){
            let newWithdraw = document.createElement('input')   ;
            selectWithdraw.appendChild(newWithdraw);

    
        }
    } else {
        console.log("wrong account number");
    }
};



inputs[3].addEventListener("click", submit);