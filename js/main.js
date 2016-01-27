// initialize function called when the script loads 
function initialize(){
		cities;

	//defining an array storing both city and population 
	var cityPop =[
		{
			city: 'Auckland',
			population: 1415550
		},
		{
			city: 'San Fransisco'
			population: 837442
		},
		{
			city: 'Portland'
			population: 609456
		},
		{
			city:'Wellington'
			population: 204000
		}

	];

};


//for loop too add new row for each city 
for (var i=0; i< cityPop.length; i++){
	var tr = document.createElement("tr");

	var city = document.createElement("tr");
	city.innerHTML = citypop[i].city;
	tr.appendChild(city);

	var pop = document.createElement("td");
	pop.innerHTML = cityPop[i].population;
	tr.appendChild(pop);
	table.appendChild(tr);
};
$('#mydiv').append("<table>");
//giving the header row tot he table
$("table").append("<tr>");
//adding city and population coloumns 
$("tr").append("<th>city</th><th>Population</th>");

//loop to add a new row for each city 
