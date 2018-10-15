// Import MySQL connection.
var connection = require("../config/connection.js");

// Import the ORM to implement functions that will interact with the database
var orm = require('../config/orm.js');

// // Create the burger object
// var burger = {
//   // Select all burger table entries
//   selectAll: function(cb) {
//     orm.selectAll('burgers', function(res) {
//       cb(res);
//     });
//   },

//   // The variables cols and vals are arrays
//   insertOne: function(cols, vals, cb) {
//     orm.insertOne('burgers', cols, vals, function(res) {
//       cb(res);
//     });
//   },

//   // The objColVals is an object specifying columns as object keys with associated values
//   updateOne: function(objColVals, condition, cb) {
//     orm.updateOne('burgers', objColVals, condition, function(res) {
//       cb(res);
//     });
//   }
// };

// Export the database functions for the controller (burgerController.js).
// module.exports = burgers;

 
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }
  
// Object for all our SQL statement functions.
var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
  
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += printQuestionMarks(vals.length);
      queryString += ") ";
  
      console.log(queryString);
  
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    // An example of objColVals would be {name: panther, sleepy: true}
   
    update: function(table, objColVals, condition, cb) {
      var queryString = "UPDATE " + table;
      queryString += " SET ";
      queryString += objToSql(objColVals);
      queryString += " WHERE ";
      queryString += condition;
      // queryString += "SET devoured = 1 WHERE id = '${id}'";
      // var queryString='UPDTE burgers SET devoured = ${condition} where id = ${id}';
      
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    },
    delete: function(table, condition, cb) {
      var queryString = "DELETE FROM " + table;
      queryString += " WHERE ";
      queryString += condition;
  
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
  };
  
  
  module.exports = orm;
  

