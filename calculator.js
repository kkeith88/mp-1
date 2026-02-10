function calculate(operation) {
    const num1 = Number(document.getElementById("first-number").value);
    const num2 = Number(document.getElementById("second-number").value);
    const output = document.getElementById("output");
    let result;

    if (operation === 'add') result = num1 + num2;
    else if (operation === 'sub') result = num1 - num2;
    else if (operation === 'mul') result = num1 * num2;
    else if (operation === 'div') result = num1 / num2;
    else if (operation === 'pow') {
        for (let i = 1; i < num2; i++) {
            if (i === 1) result = num1;
            else result *= num1;
        }
    }
    if (result < 0){
        output.style.color = "red";
    } else if (result > 0){
        output.style.color = "black";
    }

    output.innerHTML = String(result);
}

function addition() { calculate('add'); }
function subtraction() { calculate('sub'); }
function multiplication() { calculate('mul'); }
function division() { calculate('div'); }
function power() { calculate('pow'); }

function clear() {
    document.getElementById("first-number").value = "";
    document.getElementById("second-number").value = "";
    document.getElementById("output").innerHTML = "";
    document.getElementById("output").style.color = "black";
}