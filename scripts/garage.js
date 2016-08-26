console.log(" you are now tuned into the script");
}
var garage =[];
var carOnRoad=
var drivingCar;
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

  if( newCar.year == '' || newCar.make ==''||newCar.model==''){
    alert( "You can't have a car without Make, Model and Year");
  }//end missing inputs
  else{
    clearInputs();
     // push car into Garage
    garage.push( newCar);
    //display cars
    displayCars();
  }// end check for necessary fields/add car if filled

};// end addCar
var clearInputs = function(){
  console.log( 'in clearInputs');
  document.getElementById('yearIn').value = "";
  document.getElementById('makeIn').value= "";
  document.getElementById('modelIn').value= "";
  document.getElementById('picIn').value = "";
  document.getElementById('descIn').value = "";
}; // end clearInputs
var displayCars = function (){
  //test logs
  console.log("in display cars");
  console.log( garage );
  //empty div element
  document.getElementById("allCars").innerHTML = "";
  // for each car add a list item with year make and model
  for (var i = 0; i < garage.length; i++) {
    //car information
    var carInfo = '<h2>' + garage [ i ].year + " " +garage[ i ].make + " " + garage[ i ].model +
     '</h2><img src="' + garage  [i ].picture + ' ">  ' + '<p>' +
     garage[ i ].description + '</p>' + '<button id = "driveCar" onClick="takeOut( '+ i +' )">Drive it like you stole it!</button> ';
    //append car info to output div
      document.getElementById("allCars").innerHTML += carInfo;
  }
};//end displayCar
var takeOut = function(index){
  console.log('Driving the ' + garage[index].year + ' '+garage[index].make+' '+garage[index].model);
  //splice car at this index from array
  drivingCar =garage.splice( index, 1);
  console.log(drivingCar);
    displayCars();
    var driving car info=
    document.getElementById("allCars").createElement("div")
    
};//end takeOut

var putIn = function(index){
  //add drivingCar back to the garage
  //replace button for returning with button for Driving
  //replace car photo
}
