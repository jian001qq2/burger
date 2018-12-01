var express = require("express")
var router = express.Router();

//Import the model (burger.js) to use its database
var burger = require("../models/burger")


//Create all Routes 
router.get("/", function (req, res) {
    burger.all(function (data) {
        var burgersData={
            burgers:data
        }
        console.log(burgersData)
        res.render("index", burgersData)
    })
})
//To handle post(create one)
router.post("/api/burgers", function (req, res) {
    burger.insert(req.body.burger_name, function(result) {
        res.json(result);
      });
})
//To handle udpate
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("update condition", condition);
    burger.update(condition,function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});
 
// Export routes for server.js to use.
module.exports = router;