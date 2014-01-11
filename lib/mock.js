/*
 * @name: mock.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2014-01-11
 * @param: 
 * @todo: 
 * @changelog: 
 */
var fs = require("fs");
var path = require("path");
var util = require("util");
var DATAPATH;

module.exports = exports = function(options) {
    DATAPATH = options && options.path;
    return function(api) {
        var file = path.join(DATAPATH, api + ".js");
        if (fs.existsSync(file)) {
            require.cache[file] = null;
            return require(file);
        }
        else {
            util.debug(file);
            return {
                success: false,
                message: "404"
            }
        }
    };
};
