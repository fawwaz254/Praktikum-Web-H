function insert(value) {
    document.getElementById('display').value += value;
}

function calculate() {
    let expression = document.getElementById('display').value;
    if (expression.includes('^')) {
        let parts = expression.split('^');
        let base = parseFloat(parts[0]);
        let exponent = parseFloat(parts[1]);
        document.getElementById('display').value = Math.pow(base, exponent);
    } else {
        try {
            let result = eval(expression);
            document.getElementById('display').value = result;
        } catch (error) {
            document.getElementById('display').value = 'Error';
        }
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

