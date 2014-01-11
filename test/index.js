/*
 * @name: index.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2014-01-11
 * @param: 
 * @todo: 
 * @changelog: 
 */
var D = require("../")({mock: true});

D.add("./moduleA", require("./moduleA"));

var A = D.require("./moduleA");


A.say("world!");
console.log(A.name);
