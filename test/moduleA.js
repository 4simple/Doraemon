/*
 * @name: moduleA.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2014-01-11
 * @param: 
 * @todo: 
 * @changelog: 
 */
module.exports = exports = {
    name: "moduleA",
    say: function() {
        console.log("Hello, I am " + this.name + ".");
    },
    sub: {
        smile: function() {
            console.log("Wahaha!");
        },
        hehe: "hehe"
    },
    data: {
        "time": "2014-01-12 04:40:56"
    }
};
