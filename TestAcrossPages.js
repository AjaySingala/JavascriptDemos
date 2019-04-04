var fname = "";


function savedata() {
    fname = document.getElementById("txtFname").value;
    sessionStorage.setItem("firstname", fname);

    var frm = document.getElementById("frmData");
    var isValid = frm.checkValidity();
    if (isValid) {
        return true;
    }
    else {
        return false;
    }
}

function showData() {
    fname = sessionStorage.getItem("firstname");
    document.getElementById("divName").innerHTML = fname;
}


function save() {
    fname = "John Smith";
    sessionStorage.setItem("fname", fname);
    document.getElementById("divName").innerHTML = fname;

    var person = {
        firstname: "John",
        lastname: "Smith"
    };
    sessionStorage.setItem("person", JSON.stringify(person));
    //sessionStorage.setItem("person", person);
    document.getElementById("divName").innerHTML = JSON.stringify(person);
}

function retrieve() {
    fname = sessionStorage.getItem("fname");
    document.getElementById("divName").innerHTML = fname;

    var p = sessionStorage.getItem("person");
    //document.getElementById("divName").innerHTML = p.firstname;
    var person = JSON.parse(p);
    document.getElementById("divName").innerHTML = JSON.stringify(person);
}
