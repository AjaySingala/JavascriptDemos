var cars = [
    "Audi",
    "BMW",
    "Volvo",
    "Ford"
];

var person = { "firstname" : "John",
    "lastname" : "Smith",
    "city" : "Dallas",
    "state" : "TX",
    show : function() {
        return this.lastname + ", " + this.firstname;
    }
};

function showCars() {
    
    for(i = 0; i < cars.length; i++) {
        alert("i = " + i + ": " + cars[i]);
    }
}

function showName() {
    alert(person.show());
}

function showPerson() {
    var details = person.lastname + ", " + person.firstname;
    details += "\n" + person.city;
    details += "\n" + person.state;
    alert(details);
}

function types() {
    
    alert("The type of 'cars' is " + typeof cars);
    alert("The type of 'person' is " + typeof person);
}

function addToArray() {
    alert(cars.push("Tesla"));
    showCars();
}

function removeFromArray() {
    alert(cars.pop());
    showCars();
}

function shiftArray() {
    alert(cars.shift());
    showCars();
}

function unshiftArray() {
    alert(cars.unshift("Subaru"));
    showCars();
}

function deleteFromArray() {
    delete cars[0];
    showCars();
}

function forin() {
    var person1 = {
        "firstname" : "John",
        "lastname" : "Smith"
    };
    var person2 = {
        "firstname" : "Mary",
        "lastname" : "Smith"
    };
    var person3 = {
        "firstname" : "Ajay",
        "lastname" : "Smith"
    };

    for(var x in person1) {
        alert(person[x]);
    }

    var people = [ person1, person2, person3];
    for(var p in people) {
        alert(people[p].firstname);
    }
}