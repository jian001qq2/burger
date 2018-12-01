//Require express and burgers from model files
var express = require("express")
var burger = require("../models/burger")

// Create api router
var router = express.Router();

//Create all Routes 
router.get("/",function(req,res){
    res.redirect("/burgers")
})
router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        res.render("index", {burgersData: data })
    })
})
//To handle post(create one)
router.post("/burgers/create", function (req, res) {
    burger.insert(req.body.burger_name,function (result) {
        console.log("post result\n"+JSON.stringify(result))
            res.redirect("/burgers")
        })
})
//To handle udpate
router.put("/burgers/update/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("update condition", condition);
    burger.update({ "devoured": req.body.devoured
}, condition, function (result) {
            res.redirect("/burgers")
        })
})
 
// Export routes for server.js to use.
module.exports = router;