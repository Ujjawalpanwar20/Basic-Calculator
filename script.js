function appendValue(value) {
    document.getElementById('screen').value += value;
}
function clearScreen() {
    document.getElementById('screen').value = '';
}
function calculate() {
    try {
        document.getElementById('screen').value = eval(document.getElementById('screen').value);
    } catch {
        document.getElementById('screen').value = 'Error';
    }
}
function backspace() {
    let screen = document.getElementById('screen');
    screen.value = screen.value.slice(0, -1);
}