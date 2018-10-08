// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(bu) {
    orm.all("burgers", function(res) {
      bu(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, bu) {
    orm.create("burgers", cols, vals, function(res) {
      bu(res);
    });
  },
  update: function(objColVals, condition, bu) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
