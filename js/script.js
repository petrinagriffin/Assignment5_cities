$(document).ready(start);

function start(){
  $("#city-form").submit(changeBackground);
}

function changeBackground(event){
  event.preventDefault();

  var myCity = $('#city-type').val();
  //city-type is from html

  // if (myCity =='NYC' || myCity =='New York' || 'New York City')
  if(isNewYork(myCity)) {
    $('body').attr('class','nyc');
  } else if(isAustin(myCity)) {
    $('body').attr('class','austin');
  } else if(isSanFrancisco(myCity)) {
    $('body').attr('class','sf'); //sf is in the css so dont have to do the img ref thing
    //'class' what it is and second one is what we set it to
  } else if(isLosAngeles(myCity)) {
    $('body').attr('class','la');
  } else if(isSydney(myCity)) {
    $('body').attr('class','sydney');
  }
  else {
    alert('Bad city')
  }
}

function isNewYork(name){
  var result = (name == 'NYC' || name =='New York' || name == 'New York City')
  return result
}

function isAustin(name){
  var result = (name == 'Austin' || name =='ATX')
  return result
}

function isSanFrancisco(name){
  var result = (name == 'San Francisco' || name =='SF' || name =='Bay Area')
  return result
}

function isLosAngeles(name){
  var result = (name == 'Los Angeles' || name =='LA' || name =='LAX')
  return result
}

function isSydney(name){
  var result = (name == 'SYD' || name =='Sydney')
  return result
}
