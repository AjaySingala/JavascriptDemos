var people = [];

var x = 10;

function testA() {
    alert(x);
    x = 20;
    alert(x);
    testB();
    alert(x);
}

function testB() {
    alert("In testB: " + x);
    x = 40;
}

function addPersonToArray() {
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var person = {
        firstname: fname,
        lastname: lname
    };

    people.push(person);
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
}

function showAllPeople() {
    document.getElementById("divData").innerHTML = "";
    for(var i = 0; i < people.length; i++) {
        document.getElementById("divData").innerHTML += 
            "<br> " + people[i].firstname + " " + people[i].lastname;
    }
}
