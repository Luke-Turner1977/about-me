//Question 1
//Perform Arithmetic using numbers from the user
function performArithmetic() {
    //Get two numbers and operator from form and store them
    const firstarithmeticnumber = Number(document.forms.ArithmeticForm.firstarithmeticnumber.value);
    const secondarithmeticnumber = Number(document.forms.ArithmeticForm.secondarithmeticnumber.value);
    const arithmeticoperator = (document.forms.ArithmeticForm.arithmeticoperator.value);
    let arithmeticresult = 0;
    
    //Switch statement on chosen Arithmetic operator
    switch(arithmeticoperator) {
        case 'Addition':
            arithmeticresult = firstarithmeticnumber + secondarithmeticnumber;
            alert(`The result of adding ${firstarithmeticnumber} and ${secondarithmeticnumber} is ${arithmeticresult}`);
            break;
        case 'Subtraction':
            arithmeticresult = firstarithmeticnumber - secondarithmeticnumber;
            alert(`The result of subtracting ${firstarithmeticnumber} and ${secondarithmeticnumber} is ${arithmeticresult}.`);
        break;
        case 'Multiplication':
            arithmeticresult = firstarithmeticnumber * secondarithmeticnumber;
            alert(`The result of multiplying ${firstarithmeticnumber} and ${secondarithmeticnumber} is ${arithmeticresult}`);
        break;
        case 'Division':
            if (secondarithmeticnumber == 0){
                alert(`Cannot divide by zero!`);
            } else {
                arithmeticresult = firstarithmeticnumber / secondarithmeticnumber;
                alert(`The result of dividing ${firstarithmeticnumber} by ${secondarithmeticnumber} is ${arithmeticresult}.`);
                break;
            }
        default:
            //Unnecessary since we prechecked Addition
            alert('Default');
            break;
    }
}

//Question 2
//Use a script to find the factorial of a number provided by the user
function performFactorial() {
    const number = Number(document.forms.Factorial.factorialnumber.value);
    let result = 1;
    if (number < 0) {
        alert("Please enter a positive number!");
        return;
        } else {for (let i =2; i<= number; i++) {
        result *=i;
    }
    alert(`The factorial of ${number} is ${result}`);    
    }
}

//Question 3
//Calculate Nth Fibonacci Number
function performFibonacci() {
    const fibonaccinumber = Number(document.forms.Fibonacci.fibonaccinumber.value);
    const outputDiv = document.getElementById("fib-output");
    let fib1 = 0;
    let fib2 = 1;
    let result = 0;
    let i=2;
    if (fibonaccinumber < 0){
        outputDiv.innerHTML = `<h3>Cannot calculate the Nth Fibonacci number from a negative number!</h3>`;
        return;
    } else if (fibonaccinumber === 0){
        outputDiv.innerHTML = `<h3>The Nth Fibonacci number for 0 is 0</h3>`;
        return;
    } else if (fibonaccinumber === 1){
        outputDiv.innerHTML = `<h3>The First Fibonacci number is 1</h3>`;
        return;
    } else {
            for (i = 2; i <= fibonaccinumber; i++) {
                result = fib1 + fib2;
                fib1 = fib2;
                fib2 = result;
            }
    }
    // Insert the Fibonacci numbers
    outputDiv.innerHTML = `<h3>The Nth Fibonnaci number for ${fibonaccinumber} is ${result}</h3>`;
}

//Question 4
//Take 3 numbers, find the max and min and calculate the range
function performRange() {
    //Get numbers from the form and store them
    const firstrangenumber = Number(document.forms.range.firstrangenumber.value);
    const secondrangenumber = Number(document.forms.range.secondrangenumber.value);
    const thirdrangenumber = Number(document.forms.range.thirdrangenumber.value);
    let range = 0;
    let max = Math.max(firstrangenumber, secondrangenumber, thirdrangenumber);
    let min = Math.min(firstrangenumber, secondrangenumber, thirdrangenumber);
    range = max - min;
    alert(`The range between ${min} and ${max} is ${range}.`);
}

//Question 5
//Create mailing list from entries from the user
function performmailinglist() {
    const firstName = document.forms.mailinglist.firstname.value;
    const lastName = document.forms.mailinglist.lastname.value;
    const email = document.forms.mailinglist.email.value;
    const ZIP = document.forms.mailinglist.zipcode.value;
    const mailinglistInfo = '<br><div>First Name: ' + firstName + '<br>Last Name: ' + lastName + '<br>Email: ' + email + '<br>Zip: ' + ZIP + '</div>';
    document.getElementById("signupList").innerHTML += mailinglistInfo;
}
//Clear mailing list form
function performclearform () {
    document.forms.mailinglist.reset();
}