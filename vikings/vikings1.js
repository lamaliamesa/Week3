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
var Saxons = function(){
  this.health = Math.random(80,120);
  this.strength = Math.random(15,35);

  this.reduce_health = function(damage){
    this.health -= damage; 
  }
}
var viking1 = new Viking('Laura', 900, 55, 'Yodoleyhehoo!!!!!!');
var viking2 = new Viking('Raul', 800, 65, 'al ataquerrrrr!!!!!');


while (((viking1.health - viking2.strength) >= 0) && ((viking2.health - viking1.strength) >= 0)){
  console.log('Before attack ' + viking1.name + " Health status: " + viking1.health + " And " + viking2.name + " Has health status: "+ viking2.health);
  viking1.fight();
  viking2.fight();
  viking1.reduce_health(viking2.strength);
  viking2.reduce_health(viking1.strength);
  console.log('After attack ' + viking1.name + " Health status: " + viking1.health + " And " + viking2.name + " Has health status: "+ viking2.health);

}

if (viking1.health > viking2.health){
  console.log('El ganador es ' + viking1.name + " With health: " + viking1.health + " Loser: " + viking2.name + " With health: "+ viking2.health);
}
else
{
  console.log('El ganador es ' + viking2.name + " With health: " + viking2.health + " Loser: " + viking1.name + " With health: "+ viking1.health);
}  