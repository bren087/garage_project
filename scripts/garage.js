console.log(" you are now tuned into the script");
var garage =[];
var addCar = function(){
  // get user input
  // create car object
  var newCar = {
    year: document.getElementById('yearIn').value,
    make: document.getElementById('makeIn').value,
    model: document.getElementById('modelIn').value,
    picture: document.getElementById('picIn').value,
    description: document.getElementById('descIn').value,
  };// end new car
  console.log( newCar );
  // push car into Garage
 garage.push( newCar);
 //display cars
 displayCars();
};// end addCar

var displayCars = function (){
  console.log("in display cars");
  console.log( garage );
  //empty our div element
  document.getElementById("allCars").innerHTML = "";
  // for each car add a list item with year make and model
  for (var i = 0; i < garage.length; i++) {
    //car information
    var carInfo = '<h2>' + garage [ i ].year + " " +garage[ i ].make + " " + garage[ i ].model + '</h2><img src="' + garage  [i ].picture + ' ">  ' + '<p>' + garage[ i ].description + '</p>' ;
    //append car info to output div
      document.getElementById("allCars").innerHTML += carInfo;
  }
};//end displayCar
