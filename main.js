// var userInput = prompt("Please me mea number,if you don't want to do,type anything")
// var sum =0;
// var limit =8;
// var counter = 0;

// while (counter <= limit) {
//     alert(counter);
//     counter = + 2;
// }

// alert(`Final value of the counter is ${counter}`);

function calculate() {
    var fNumber = parseInt(document.getElementById("f-number").value);
    var lNumber = parseInt(document.getElementById("l-number").value);
    console.log(fNumber, lNumber);

    var counter =fNumber;
    var sum =0;
    var steps = `${fNumber}`;
    // console.log(typeof steps);
    
    while (counter <= lNumber) {
        sum = sum + counter;
        counter = counter + 1;
        console.log(`${steps} + ${counter}`);
        stepsFinal = steps;
        steps = `${steps} + ${counter}`;
    }
    document.getElementById('sum').innerHTML = sum;
    document.getElementById('steps').innerHTML = `${stepsFinal} = ${sum}`;
    
}

