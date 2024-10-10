// Menampilkan input ke display
function insert(value) {
    document.getElementById('display').value += value;
}

// Fungsi untuk menghitung hasil
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

// Fungsi untuk clear display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Fungsi untuk operasi pangkat
function power() {
    let display = document.getElementById('display').value;
    let values = display.split('^');
    if (values.length === 2) {
        let base = parseFloat(values[0]);
        let exponent = parseFloat(values[1]);
        let result = Math.pow(base, exponent);
        document.getElementById('display').value = result;
    } else {
        document.getElementById('display').value += '^';
    }
}
