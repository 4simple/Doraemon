/*
 * @name: moduleA.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2014-01-11
 * @param: 
 * @todo: 
 * @changelog: 
 */
var Q = require("q");

module.exports = exports = {
    name: "moduleA",
    say: function() {
        console.log("Hello, I am " + this.name + ".");
    },
    sub: {
        smile: function() {
            console.log("Wahaha!");
        }
    },
    async: function() {
        var deferred = Q.defer();
        Q.delay(2000).then(function() {
            deferred.resolve({
                success: true,
                time: "2014-01-12 15:54:15"
            });
        });

        return deferred.promise;
    }
};
