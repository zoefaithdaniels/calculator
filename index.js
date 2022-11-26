let output = document.querySelector("#output");
let empArray = [];

function calculate(anyVal) {
    switch(anyVal) {
        case '.':
            if (!empArray.includes('.')) {
                output.value += anyVal;
                empArray.push(anyVal);
            }
            break;
        case '+':
        case '-':
        case '*':
        case '/':
            if(!output.value.endsWith(anyVal)) {
                output.value += anyVal;
                empArray = [];
            }
            break;
        default:
            empArray.push(anyVal);
            output.value += anyVal;
    }
}

function clr() {
    output.value = "";
    empArray = [];
}

function del() {
    output.value = output.value.slice(0,-1);
    empArray.pop()
}

function equal() {
    try {
        output.value = eval(output.value);
    }
    catch (err) {
        output.value = "";
    }
}

