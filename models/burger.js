var orm=require("../config/orm");

var burgers ={
    all: function(cb) {
        orm.selectAll( function(res) {
          cb(res);
        });
      },
      
    insert: function(vals, cb) {
        orm.insertOne(vals,function(res) {
          cb(res)
      });
    },
      
    update: function(condition, cb) {
        orm.updateOne(condition, function(res) {
          cb(res);
        });
      }
    };
    
    // Export the database functions for the controller (catsController.js).
    module.exports = burgers;
    