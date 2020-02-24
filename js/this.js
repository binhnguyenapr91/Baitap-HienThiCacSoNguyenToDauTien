let inputNoOfPrime=0;
let count=0;
let index =2;
function getPrimeNumber() {
    let number = 2;
    inputNoOfPrime = parseInt(document.getElementById("noOfPrime").value);
    while (count<inputNoOfPrime){
        if (checkPrime(number)){
            document.getElementById("result").innerHTML += number +"<br>";
            count++;
        }
        number++;
    }
}
//Ham kiem tra gia tri number truyen vao co phai la prime hay khong va tra ve gia tri true hoac false
function checkPrime(number) {
    let checkNumber = true;
    for(index =2;index<number-1;index++){
        if (number%index==0){
            checkNumber = false;
            break;
        }
    }
    return checkNumber;
}