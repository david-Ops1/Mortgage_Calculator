//Author: David Shenouda   
//Date: 11/10/2021
//Assignment 11

function monthly(I, N, S) {
    //Inputs:
    //I : Yearly Interest Year in decimal (e.g. 8.5% = 0.085)
    //N : Number of monthly payments
    //S : Loan amount
    //Outputs:
    //returns monthly payments on the loan
    return (S * I / 12 * Math.pow(I / 12 + 1, N)) / (Math.pow(I / 12 + 1, N) - 1);
}

function resetForm() {
    return confirm("Do you really want to reset this form?");
}

function showVal() {
    var amount = document.getElementById("amount").value;
    var interest = document.getElementById("interest").value;
    var loanLength = document.getElementById("loanLength").value;

    while (amount <= 0 || amount == null) {

        amount = prompt("Please enter a positive value for the loan amount");

    }

    interest = interest / 100;
    loanLength = loanLength * 12;
    if (document.getElementById("personal").checked == true) {

        amount = Number(amount) + 1000;

    }

    if (document.getElementById("business").checked == true) {

        amount = Number(amount) + 500;

    }

    if (document.getElementById("student").checked == true) {
        amount *= 0.99;
    }


    var monthlyPay = monthly(interest, loanLength, amount)
    var totalPay = monthlyPay * loanLength;
    document.getElementById("monthlyPay").value = monthlyPay.toFixed(2);
    if (monthlyPay > 5000) {

        alert("We need last 5 years of tax returns for all loans over $5000.00!");

    }



    document.getElementById("totalPay").value = totalPay.toFixed(2);


}
