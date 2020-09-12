/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function add(n1, n2){
   return n1 +n2;
}

var sub = function(n1,n2){
  return n1 - n2;
};

function mul(n1,n2){
  return n1/n2
  };

var cb = function(n1,n2, callback){
    try {
  return "Result from the two numbers: "+n1+"/"+n2+"="+callback(n1,n2)
} catch (e) {
  console.error(e.name + ': ' + e.message)
}
  
};

//console.log(cb(4,3,mul));

var boys = ["Peter", "lars", "Ole"];

const result = boys.filter(boys => boys.length < 4);

//console.log(boys);
//console.log(result);

var mapArray = boys.map(function(all){
  return all.toUpperCase();
});

//console.log(mapArray);

var cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//console.log(cars.filter(car => (car.price < 5000)));
//console.log(cars.filter(car => (car.year > 1999 )));
//console.log(cars.filter(car => (car.make =="Volvo")));


var makeSQL = function(items) {
    var keys = Object.keys(items[0])
    var output = items.map(car => {
        var temp = [];
        for(var i = 0; i < keys.length; i++) {
            temp.push(car[keys[i]]);
        }
        return temp.join(",");
    })
    var result = output.map(e => {
        return "INSERT INTO cars ("+keys.join(",")+") VALUE (" + e +")";
    });
    return result;
} 
//console.log(makeSQL(cars));

var msgPrinter = function(msg,delay){
  setTimeout(function(){
    console.log(msg);
  },delay);
};
//console.log("aaaaaaaaaa");
//msgPrinter ("bbbbbbbbbb",2000);
//console.log("dddddddddd");
//msgPrinter ("eeeeeeeeee",1000);
//console.log("ffffffffff");

function Person(name){
  this.name = name;
  //console.log("Name: "+ this.name);
  var self = this;
  setTimeout(function(){
  //  console.log("Hi  "+self.name);  //Explain this - dette er en lokal variable da det er inde i en function og er derfor undefined.
  }.bind(this),2000);
}
//call it like this (do it, even if you know it’s silly ;-)
Person("Kurt Wonnegut");  //This calls the function
//console.log("I'm global: "+ name);  //Explain this - da functionen er en constructor, så er Kurt Wonnegut defineret og er derfor global.

//functioner er case sensitive, men hvis man kalder en function med et stort forbogstav, så ved man at det er en constructor.

//var p = new Person("Kurt Wonnegut");  //Create an instance using the constructor function
//console.log("I'm global: "+ name);  //What’s different ? - name er nu ikke længere defineret og er derfor undefined

var greeter = function(){
  console.log(this.message);
};
var comp1 = { message: "Hello World" };
var comp2 = { message: "Hi" };

var g1 = greeter.bind(comp1 );//We can store a reference, with a specific “this” to use
var g2 = greeter.bind(comp2 );//And here another “this”
setTimeout(g1,500);
setTimeout(g2,1000);
