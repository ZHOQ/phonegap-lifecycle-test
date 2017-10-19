


localStorage.setItem("pen", "blue");
var val = localStorage.getItem("pen");

localStorage.setItem("pen", "pink");
var val1 = localStorage.getItem("pen");

    var person= {
		"firstName": "Homer",
  		"lastName": "Simpson",
 		"address": {
    			"streetAddress": "742 Evergreen Terrace",
    			"city": "Springfield",
    			"state": "?"
		}
	}
    


console.log("name: "+ person.firstName);
    console.log("city: " + person.address.city);
    
    var personString = JSON.stringify(person);

localStorage.setItem("address",personString);

var getPerson = window.localStorage.getItem("address");

var personJSON = JSON.parse(getPerson);


    
$(document).ready(function() {
    console.log("ready!");
    $("#key").text("pen: " + val);
    $("#key1").text( "pen: " + val1);
    $("#person").text("name: " + personJSON.firstName + " "+ personJSON.lastName);





});
