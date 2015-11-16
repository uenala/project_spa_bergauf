var express = require('express');
var router = express.Router();
var users = require('../controller/user-controller.js');
var orders = require('../controller/order-controller.js');

// test route to make sure everything is working
router.get('/ws/', function(req, res) {
    res.json({ message: 'welcome to our webservice-api!' });
});

// api-calls are not secured by jwt-token
router.get("/ws/users", users.getAllUsers);
router.get("/ws/users/:id", users.getUserById);
router.post("/api/users", users.addUser); // User-Data is getting submitted in JSON-Body
router.put("/ws/users/:id", users.updateUser);
router.delete("/ws/users/:id", users.deleteUser);

router.get("/ws/admins/:id", users.getAdminUserByUsername);

router.get("/ws/orders", orders.getAllOrders);
router.get("/ws/orders/:id", orders.getOrdersByUsername);
router.post("/ws/orders", orders.addOrder); // Order-Data is getting submitted in JSON-Body
router.put("/ws/orders/:id", orders.markOrderProcessed);

router.post("/api/authenticate", users.authenticateUser); // User-Data is getting submitted in JSON-Body


module.exports = router;
