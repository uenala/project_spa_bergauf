var express = require('express');
var router = express.Router();
var users = require('../controller/user-controller.js');


// test route to make sure everything is working
router.get('/ws/', function(req, res) {
    res.json({ message: 'welcome to our webservice-api!' });
});

router.get("/ws/users", users.getAllUsers);
router.get("/ws/users/:id", users.getUserById);
router.post("/ws/users", users.addUser);
router.put("/ws/users/:id", users.updateUser);
router.delete("/ws/users/:id", users.deleteUser);


module.exports = router;
