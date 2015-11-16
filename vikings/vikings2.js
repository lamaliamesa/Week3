var Viking = function(name, health, strength, shout){
  this.name = name;
  this.health = health;
  this.strength = strength;
  this.shout = shout;

  this.viking_shout = function(){
    console.log(shout);
  }

  this.fight = function(){
    this.viking_shout();
  }

  this.reduce_health = function(damage){
    this.health -= damage; 
  }
}

function getRandomArbitrary(min, max){
  return Math.floor(Math.random() * (max - min) + min);
}

var Saxons = function(){
  this.health = getRandomArbitrary(80, 120);
  this.strength = getRandomArbitrary(15, 35);

  this.reduce_health = function(damage){
    this.health -= damage; 
  }
}

var viking1 = new Viking('Laura', 900, 55, 'Yodoleyhehoo!!!!!!');
var viking2 = new Viking('Raul', 800, 65, 'al ataquerrrrr!!!!!');

var arr_vikings = [];
arr_vikings.push(viking1);
arr_vikings.push(viking2);

var arr_saxons = [];
var total_saxons = getRandomArbitrary(5, 9);

console.log(total_saxons);

for (var i = total_saxons; i >= 0; i--) {
  var saxon= new Saxons();
  arr_saxons.push(saxon);
}

while ((arr_saxons.length>0) && (arr_vikings.length>0)){
  var random_viking = getRandomArbitrary(0, random_viking.length);
  var random_saxons = getRandomArbitrary(0, random_saxons.length);

  console.log(random_viking);

  arr_vikings[random_viking].reduce_health(arr_saxons[random_saxons].strength);
  arr_saxons[random_saxons].reduce_health(arr_vikings[random_viking].strength);

  if (arr_vikings[random_viking].health <= 0){
    arr_vikings.splice(random_viking, 1);
  }
  if (arr_saxons[random_saxons].health <= 0){
    arr_saxons.splice(random_saxons, 1);
  }
}

if(arr_saxons.length === 0){
  console.log('Todos Saxons Muertos, Vikings win');
}
else if(arr_vikings.length === 0){
  console.log('All Vikings dead, Saxons win');
}
else{
  console.log('Todos Muertos');
}
