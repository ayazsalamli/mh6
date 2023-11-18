let weather = prompt('WHAT IS THE TEMPERATURE');

let netice;
if (weather > 15) {
    netice = 'NORMAL TEMPERATURE';

} else {
    netice = 'COLD COLD COLD';
}
document.getElementById('wet').innerHTML = netice;