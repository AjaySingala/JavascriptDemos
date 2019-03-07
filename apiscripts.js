function callAPI() {
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

    request.onload = function () {
        // Begin accessing JSON data here
        var data = JSON.parse(this.response);
        var list = "";
        if (request.status >= 200 && request.status < 400) {
            data.forEach(movie => {
                console.log(movie.title);
                list += "<br>" + movie.title;
            });
            document.getElementById("root").innerHTML = list;
        } else {
            console.log('error');
        }
    }


    // Send request
    request.send();
}
