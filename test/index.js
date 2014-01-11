/*
 * @name: index.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2014-01-11
 * @param: 
 * @todo: 
 * @changelog: 
 */
var path = require("path");
var D = require("../")({mock: true, dataPath: path.join(__dirname, "data")});

D.add("moduleA", require("./moduleA"));

var A = D.require("moduleA");

//console.log(A.name);
//console.log(A.data);
console.log(A.say());
console.log(A.sub.smile());
