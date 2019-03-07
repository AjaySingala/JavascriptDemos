function add() {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var res = addNumbers(num1, num2);
    
    document.getElementById('result').innerHTML = res;
}

function addNumbers(x, y) {
    return x + y;
}

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

function getTemperature()
{
    var fahrenheit = Number(document.getElementById("fah").value);
    document.getElementById("celcius").innerHTML = toCelsius(fahrenheit);
}
