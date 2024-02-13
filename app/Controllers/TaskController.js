const express = require("express");
const router = express.Router();
const Task = require('../Models/Tasks');


router.use(express.json());

// CREATES A NEW TASK
router.post("/", function(req, res) {
Task.create(
    {
    title: req.body.title,
    completed: req.body.completed
    }
).then(()=> {
    console.log("Dette er tasken", Task);
    res.send("task created");
})
.catch((err) => {
    if (err)
    return res
        .status(500)
        .send("There was a problem adding the information to the database.");
    res.status(200).send(task);
    })
});

// RETURNS ALL THE TASKS IN THE DATABASE
router.get("/", (req, res) => {
    try{
        console.log(res.body.tasks);
        res.send("hej");

    } catch(err) {
        console.log(err);
    }
});
  

module.exports = router;
