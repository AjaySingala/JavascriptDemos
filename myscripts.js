function add() {
    var i = 10;
    var j = 12;
    var k = i + j;
    return k;
}

function setResult() {
    document.getElementById("result").innerHTML = add();
}

function setFullname() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var fullname = lname + ', ' + fname;
    document.getElementById('fullname').innerHTML = fullname;
}

function btnOne() {
    alert("Value: " + document.getElementById('one').value);
    alert("innerHTML: " + document.getElementById('one').innerHTML);
    alert("innerText: " + document.getElementById('one').innerText);
}

function btnTwo() {
    alert("Value: " + document.getElementById('two').value);
    alert("innerHTML: " + document.getElementById('two').innerHTML);
    alert("innerText: " + document.getElementById('two').innerText);
}
