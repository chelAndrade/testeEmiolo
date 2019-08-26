var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response) {
    fs.readFile(__dirname + "/html/index.html", function(err, data){
        response.end(data);
    });
});

server.listen(3000, function () {
    console.log('Servidor rodando na porta 3000');
});

swapi.get('https://swapi.co/api/people/').then((result) => {
    console.log(result);
    return result.nextPage();
}).then((result) => {
    console.log(result);
    return result.previousPage();
}).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});

{
    "name": "  ",
    "age": " ",
    "address": " ",
    "sex": "  ",
    "homeworld": "https://swapi.co/api/planets/1/", [],
	[
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
}

{
    "name": "  ",
    "age": " ",
    "address": " ",
    "sex": "  ",
    "homeworld": "https://swapi.co/api/planets/1/", [],
	[
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
}

{
    "name": "  ",
    "age": " ",
    "address": " ",
    "sex": "  ",
    "homeworld": "https://swapi.co/api/planets/1/", [],
	[
        "https://swapi.co/api/vehicles/14/",
        "https://swapi.co/api/vehicles/30/"
    ],
    "starships": [
        "https://swapi.co/api/starships/12/",
        "https://swapi.co/api/starships/22/"
    ],
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-20T21:17:56.891000Z",
    "url": "https://swapi.co/api/people/1/"
}

function cadcliente(){
	var formulario = document.createElement("FORM");
	var input01 = document.createElement("INPUT");
	formulario.appendChild(input01);
	var attinput01 = document.createAttribute("type");
	attinput01.value = "text";
	input01.setAttributeNode(attinput01);
	document.body.appendChild(formulario);

}
			