// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// // Import the ORM to implement functions that will interact with the database
// var orm = require('../config/orm.js');

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

// // Export the database functions for the controller (burgerController.js).
// module.exports = burger;


var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
      console.log('Testing for burger:',res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    // orm.create("burgers", cols, function(res) {
      orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
  
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
