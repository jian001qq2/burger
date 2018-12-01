var connection = require('./connection')
var orm = {
    selectAll: function (cb) {
        connection.query("SELECT * FROM burgers", function(err,result){
            if (err) throw err
            cb(result)
        })
    },

    insertOne: function (vals, cb) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", vals, function(err,result){
            if (err) throw err
            cb(result)
        })
    },

    updateOne: function (condition, cb) {
        var queryString = "UPDATE burgers SET devoured=TRUE WHERE "
        queryString += condition
        console.log("updating query"+queryString)
        connection.query(queryString, function (err, result){
            if (err) throw err
            cb(result)
        })
    }
}

module.exports = orm