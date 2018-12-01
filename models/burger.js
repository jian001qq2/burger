var orm=require("../config/orm");

var burgers ={
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
      
    insert: function(name, cb) {
        orm.insertOne("burgers",["burger_name","devoured"],[name,false],cb);
      },
      update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
          cb(res);
        });
      }
    };
    
    // Export the database functions for the controller (catsController.js).
    module.exports = burgers;
    