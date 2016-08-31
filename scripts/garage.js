console.log(" garage.js is sourced");
var garage =[];
$( document ).on( 'click', '#addCar', function(){
  var newCar = {
    year: $('#yearIn').val(),
    make: $('#makeIn').val(),
    model: $('#modelIn').val(),
    picture: $('#picIn').val(),
    description: $('#descIn').val(),
  };// end new car

  if( newCar.year === ''){
    $('#yearIn').fadeOut(250).fadeIn().focus();
  }
  else if(newCar.make ===''){
    $('#makeIn').fadeOut(250).fadeIn().focus();
  }
  else if(newCar.model ==='' ){
     $('#modelIn').fadeOut(250).fadeIn().focus();
   }
  else if(newCar.picture ===''){
      $('#picIn').fadeOut(250).fadeIn().focus();
    }
  else if(newCar.description ===''){
      $('#descIn').fadeOut(250).fadeIn().focus();
    }//end missing inputs
  else{
    clearInputs();
     // push car into Garage
    garage.push( newCar);
    //display cars
    displayCars();
  }
});// end addCar

var clearInputs = function(){
  console.log( 'in clearInputs');
  $('#yearIn').empty();
  $('#makeIn').empty();
  $('#modelIn').empty();
  $('#picIn').empty();
  $('#descIn').empty();
}; // end clearInputs
var displayCars = function (){
  //test logs
  console.log("in display cars");
  //empty div element
  $("#allCars").empty();
  // for each car add a list item with year make and model
  for (var i = 0; i < garage.length; i++) {
    //car information
    $('#allCars').append("<p><strong>" + garage[ i ].year +" "+ garage[ i ].make + " "+garage[ i ].model +"</strong></p>");
    $('#allCars').append('<img src ="' + garage[ i ].picture +'">');
    $('#allCars').append('<p>'+garage[ i ].description +'</p>');
    $('#allCars').append('<button id="driveCar">Take it out for a spin</button>');
  }
};//end displayCar

$(document).on('click', '#driveCar', function(i){
  console.log('In driveCar onclick');
  
});
