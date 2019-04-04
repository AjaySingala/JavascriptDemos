
var x = 10;

function testA() {
    alert(x);
    x = 20;
    alert(x);
    testB();
    alert(x);
    {
        alert(x);
        var x = 19;
        alert(x);
    }
    alert(x);
}

function testB() {
    alert("In testB: " + x);
    x = 40;
}
