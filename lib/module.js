/*
 * @name: module.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2014-01-11
 * @param: 
 * @todo: 
 * @changelog: 
 */
var util = require("util");
var mock = require("./mock");
var MODS = {};

function _addMethod(name, func) {
    MODS[name] = function() {
        if (process.env === "mock") {
            return mock(name);
        }
        return func.apply(null, arguments);
    }
}

function _addObject(name, obj, receiver) {
    receiver = receiver || MODS;
    receiver[name] = {};

    for (var key in obj) {
        if (!obj.hasOwnProperty(key)) {
            return;
        }

        if (typeof obj[key] === "function") {
            receiver[name][key] = (function(func) {
                return function() {
                    process.env === "mock" ? mock(name + "." + key) : func.apply(obj, arguments);
                }
            })(obj[key])
        }
        else if (typeof obj[key] === "object") {
            _addObject(key, obj[key], receiver[name]);
        }
        else {
            receiver[name][key] = process.env === "mock" ? mock(name + "." + key) : obj[key];
        }
    }
}

module.exports = exports = {
    add: function(name, definition) {

        if (typeof name !== "string") throw TypeError();

        if (typeof definition === "undefined") {
            definition = require(name);
        }

        if (typeof definition === "function") {
            _addMethod(name, definition);
        }
        else if (typeof definition === "object") {
            _addObject(name, definition);
        }
        else {
            MODS[name] = process.env === "mock" ? mock(name) : definition;
        }

    },
    require: function(name) {
        if (typeof name !== "string") throw TypeError();
        return MODS[name];
    }
};