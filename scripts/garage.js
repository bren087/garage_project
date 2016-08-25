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
};//end displayCars
