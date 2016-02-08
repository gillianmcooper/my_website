//initialize function called when the script loads(loads all code into browser before you load the code)
function initialize(){
//calling all the functions
    // cities();
    // addEvents();

 	debugAjax();
};

// //function to create a table with cities and their populations
// function cities(){
//     //define two arrays for cities and population
//     var cityPop = [
//       	{
// 			city: 'Auckland',
// 			population: 1415550
// 		},
// 		{
// 			city: 'San Fransisco',
// 			population: 837442
// 		},
// 		{
// 			city: 'Portland',
// 			population: 609456
// 		},
// 		{
// 			city:'Wellington',
// 			population: 204000
// 		}

//     ];
//     //append the table element to the div
//     $("#mydiv").append("<table>");

//     //append a header row to the table
//     $("table").append("<tr>");

//     //add the "City" and "Population" columns to the header row
//     $("tr").append("<th>City</th><th>Population</th>");

//     //loop to add a new row for each city
//     for (var i = 0; i < cityPop.length; i++){
//         //assign longer html strings to a variable
//         var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
//         //add the row's html string to the table
//         $("table").append(rowHtml);
//     };
// //have to call the function from below within the cities function
// addColumns(cityPop);

// };





//  //debugging

//  function addColumns(cityPop){
//  //defining the function to add, lable and populate the coloumns, when called above   
//     $('tr').each(function(i){

//     	if (i == 0){
// //append statement adds the specified coloumn (city size) to the html called table header <th>
//     		$(this).append('<th>City Size</th>');
//     	} else {
// //creating the variable city size then using an if/else if/else statement to classify the cities by size
//     		var citySize;

//     		if (cityPop[i-1].population < 100000){
//     			citySize = 'Small';

//     		} else if (cityPop[i-1].population < 500000){
//     			citySize = 'Medium';

//     		} else {
//     			citySize = 'Large';
//     		};
// //append statement populates the citysize row in the <td> table data taggs
//     		$(this).append('<td>' + citySize + '</td>');
//     		console.log(cityPop[i-1]);

//     	};
//     });

// };


// function addEvents(){
// // need to remove the # from table as it is not a document element and make the i a function parameter for the loop
// 	$('table').mouseover(function(i){
		
// 		var color = "rgb(";
// //this for runs after the first for loop (for the fist table row i=0)
// 		for (var i=0; i<3; i++){

// 			var random = Math.round(Math.random() * 255);
// //adding the variable color to the variable random +
// 			color += random;
// //if /else statement is running after the initial for loop, 
// //concatenating the responses to build rgb(), it runs twice as if and once as else
// //decided by the i<2 in if 

// 			if (i<2){
// 				color += ",";
			
// 			} else {
// 				color += ")";
// 			};
// 		};
// //second color here is calling the function the is the Jquery calling the function color
// 		$(this).css("color", color);
// 	});
// 	//defining the click me function inside of another function so that they run concurrently
// 	function clickme(){

// 		alert('Hey, you clicked me!');
		
// 	//must put the click me call inside the function or it will run independantly
		
// 	};
// 	//this calls the function!!must be outside of the function!!!!
// 	$('table').on('click', clickme);
// };






//Module 3-AJAX



//debugging ajax


//response is the parameter that is built into the success property- Ajax can take three parameters but in this case it is only taking one 

function debugCallback(response){
//This has to be #mydiv as it is an id
	$('#mydiv').append('GeoJSON data: ' + JSON.stringify(response));
};

function debugAjax(){


//calling the data from the geojson $.ajax so that the pages loads faster and can be done simulatniously with other functions

	$.ajax("data/MegaCities.geojson", {
		dataType: "json",
		// this function can take three parameters 
		success: function(response, status){

//setting mydata= to the data in the MegaCities.json
			debugCallback(response);
//this console log contains the data as the function response only runs when ajax has run through the whole data = success- the built in function 
			console.log(response);
		
		}
	});
	//by the time the funstion gets to this point the data has not finished moving through 
	//yet so at this time the data logs as undefined (this is also why in the console line 159 is printed before 154 as this is in the function)
console.log(response, success);
};


//call the initialize function when the document has loaded
$(document).ready(initialize);
