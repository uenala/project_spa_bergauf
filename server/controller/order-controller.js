var fs = require('fs');

var dataFile = "./data/orders.json";

// this method covers getting all orders of a given username
module.exports.getOrdersByUsername = function(req, res) {
    console.log("username = " + req.params.id);
    console.log("try to retrieve orders by username as identifier");

        if(getOrdersByUsername(req.params.id)){
            return res.json(getOrdersByUsername(req.params.id));
        } else {
            res.statusCode = 404;
            return res.send('Error 404: No orders for this username found');
        }

     // finally
    res.statusCode = 404;
    res.send('Error 404: No orders found');
};

// this method covers getting all orders
module.exports.getAllOrders = function(req, res) {
    console.log("try to retrieve all orders");

    if(getAllOrders()){
        return res.json(getAllOrders());
    } else {
        res.statusCode = 404;
        return res.send('Error 404: No orders found');
    }

    // finally
    res.statusCode = 404;
    res.send('Error 404: No orders found');
};


// method to add a new order, reads the cart-data in the JSON-Body
module.exports.addOrder = function(req, res) {
    console.log("addOrder called");
    var orders = readJsonDataFile();

    //debug only
    //res.setHeader('Content-Type', 'text/plain');
    //res.write('you posted:\n');
    //res.end(JSON.stringify(req.body, null, 2));

    if(!req.body.hasOwnProperty('username') ||
        !req.body.hasOwnProperty('changed') ||
        !req.body.hasOwnProperty('products')) {
        res.statusCode = 400;
        return res.send('Error 400: POST syntax incorrect.');
    }

    var cart = {
        username : req.body.username,
        ordered : req.body.changed,
        products : req.body.products
    };

    // add cart to orders of given username
    var newOrder = createNewOrder(cart);
    orders.push(newOrder);
    console.log("try to add new order: " + newOrder.username + " ordered at:" + newOrder.ordered);
    fs.writeFile(dataFile, JSON.stringify(orders), function(err){
        if (err) {
            res.end();
            return console.log("Error creating users.json with new user! Root cause: " + err);
        }
    });
    res.json(true);
};

// read datafile or initialize with a new empty datafile in case no one exists
var readJsonDataFile = function(){
    var orders = [];
    try {
        orders = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
    }
    catch (error) {
        // orders.json doesn't exist
        fs.writeFile(dataFile, '[]', function(err){
            if (err) {
                res.end();
                return console.log("Error creating a new orders.json. Root cause: " + err);
            }
        });
        orders = [];
        console.log("creating a new orders.json because it didn't already exist.");
    }
    return orders;
};

// create a new order-object from a given cart-object
var createNewOrder = function (cart){
    var newOrder = {
        username: cart.username,
        ordered: cart.ordered,
        processed: "false",
        products: []
    };

    for (var i = 0; i < cart.products.length; i++){
        //console.log("in loop, add cart.products[ " + i +" ] to order.");
        newOrder.products.push(cart.products[i]);
    }

    return newOrder;
};

// get matching orders by username
var getOrdersByUsername = function (username){
    var orders = readJsonDataFile();
    var ordersWithMatchingUsername = [];

    for (var i = 0; i < orders.length; i++){
        if(orders[i].username == username){
            var orderWithMatchingUsername = orders[i];
            ordersWithMatchingUsername.push(orderWithMatchingUsername);
        }
    }
    return ordersWithMatchingUsername;
};


// get matching orders by username
var getAllOrders = function (){
    var orders = readJsonDataFile();
    return orders;
};

// // not used yet..
// // get matching order by username and ordered-timestamp
//var getOrderByUsernameAndTimestamp = function (username, timestamp){
//    var orders = getOrdersByUsername(username);
//
//    if(timestamp < 1442819557000) { // timestamp is older than this code ;-)
//        return;
//    }
//
//    for (var i = 0; i < orders.length; i++) {
//        var order = orders[i];
//        console.log("in loop, order.ordered = " + order.ordered + " looking for timestamp: " + timestamp);
//        if (order.ordered == timestamp) {
//            return order;
//        }
//    }
//};



