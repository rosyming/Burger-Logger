// Importing MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(colName, tableName) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [colName, tableName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // "INSERT INTO tasks (task) VALUES (?)"
    insertOne: function(tableName, colName, value) {
        var queryString = "INSERT INTO ?? (??) VALUES ?";
        connection.query(queryString, [tableName, colName, value], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    // "UPDATE tableName SET "
    updateOne: function ()


    
    

};