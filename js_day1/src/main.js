/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];


var all = (boys.concat(girls));

var all2 =[...boys, ...girls];

var all3 = [all.join('-')];

all.unshift("Hans");
all.push("Gitte");

all.shift("Hans");
all.pop("Gitte");

all.splice(2,2);

all.reverse();

all.sort();

var mapArray = all.map(function(all){
  return all.toUpperCase();
});

console.log(mapArray);

let filtertid = mapArray.filter((p) => p.startsWith("L"));

console.log(filtertid);