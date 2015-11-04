var fs = require('fs');

var dataFile = "./data/users.json";
var adminFile = "./data/admins.json";

// this method retrieves all users from an existing datafile via streaming or creates an empty datafile (& returns empty) if necessary
module.exports.getAllUsers = function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/json'});
    var stream = fs.createReadStream(dataFile);
    stream.on('open', function() {
        stream.pipe(res);
    });
    stream.on('error', function(err) { // node.json doesn't exist
        fs.writeFile(dataFile, '[]', function(err){
            if (err) {
                res.end();
                return console.log("Error creating a new users.json. Root cause: " + err);
            }
        });
        stream = fs.createReadStream(dataFile).pipe(res);
        console.log("creating a new users.json because it didn't already exist.");
    });
};

// this method covers getting a user by id and by username/email
module.exports.getUserById = function(req, res) {

    var users = readJsonDataFile(dataFile);
    var identifier = parseInt(req.params.id); // check for a numeric parameter
    //console.log("id = " + req.params.id);
    //console.log("users.length = " + users.length);
    if (users && !isNaN(identifier)){
        //console.log("try to retrieve user by id as identifier");
        if(getMatchingUserById(req.params.id)){
            return res.json(getMatchingUserById(req.params.id));
        }
        res.statusCode = 404;
        return res.send('Error 404: No user with matching id found');

    } else if(users && isNaN(identifier)) {
        //console.log("try to retrieve user by username/email as identifier");
        if(getMatchingUserByUsername(req.params.id)){
            return res.json(getMatchingUserByUsername(req.params.id));
        }
        res.statusCode = 404;
        return res.send('Error 404: No user with matching username found');
    }
     // finally
    res.statusCode = 404;
    res.send('Error 404: No user found');
};

// method to add a new user
module.exports.addUser = function(req, res) {

    var users = readJsonDataFile(dataFile);

    //debug only
    //res.setHeader('Content-Type', 'text/plain');
    //res.write('you posted:\n');
    //res.end(JSON.stringify(req.body, null, 2));

    if(!req.body.hasOwnProperty('firstname') ||
        !req.body.hasOwnProperty('lastname') ||
        !req.body.hasOwnProperty('username') ||
        !req.body.hasOwnProperty('password')) {
        res.statusCode = 400;
        return res.send('Error 400: POST syntax incorrect.');
    }

    // check for duplicates
    if (getMatchingUserByUsername(req.body.username)){
            res.statusCode = 409;
            return res.send('Error 409: Conflict, user already exists.');

    }

    var newUser = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        password : req.body.password,
        id: 9999
    };


    // assign id
    var lastUser = users[users.length - 1] || { id: 0 };
    newUser.id = lastUser.id + 1;

    users.push(newUser);
    console.log("try to add new user: " + newUser.username);
    fs.writeFile(dataFile, JSON.stringify(users), function(err){
        if (err) {
            res.end();
            return console.log("Error creating users.json with new user! Root cause: " + err);
        }
    });
    res.json(true);
};


// method to update a existing user
module.exports.updateUser = function(req, res) {

    var users = readJsonDataFile(dataFile);
    var identifier = parseInt(req.params.id); // should be a numeric parameter
    //console.log("id check param " + req.params.id + ", body " + req.body.id);


    if(!req.body.hasOwnProperty('firstname') ||
        !req.body.hasOwnProperty('lastname') ||
        !req.body.hasOwnProperty('username') ||
        !req.body.hasOwnProperty('password') ||
        !req.body.hasOwnProperty('id') ||
        isNaN(identifier) || // check for a numeric parameter
        req.params.id != req.body.id){
        res.statusCode = 400;
        return res.send('Error 400: PUT syntax incorrect.');
    }

    // update user fields, username is unmodifiable, id is ignored for update (is system owned)
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == identifier) {
            if (users[i].username != req.body.username) {
                res.statusCode = 400;
                return res.send('Error 409: username is unmodifiable.');
            }
            users[i].firstname = req.body.firstname;
            users[i].lastname = req.body.lastname;
            users[i].password = req.body.password;
            console.log("updated user: " + users[i].username);
            break;
        } // non-matching id's are silently ignored.
    }

    fs.writeFile(dataFile, JSON.stringify(users), function(err){
        if (err) {
            res.end();
            return console.log("Error creating users.json with updated user! Root cause: " + err);
        }
    });
    res.json(true);
};

// method to delete a existing user
module.exports.deleteUser = function(req, res) {

    var users = readJsonDataFile(dataFile);
    var identifier = parseInt(req.params.id); // should be a numeric parameter

    if(isNaN(identifier)){// check for a numeric parameter
        res.statusCode = 400;
        return res.send('Error 400: DELETE syntax incorrect.');
    }

    // delete user
    var match = false;
    for (var i = 0; i < users.length; i++) {
        //console.log("checking existing user " + users[i].id + " against requested id " + identifier);
        if (users[i].id == identifier) {
            var deletedUsername = users[i].username; // save username for logging
            users.splice(i, 1);
            console.log(JSON.stringify(users));
            match = true;
            break;
        }
    }
    if (!match) {
        console.log("Error deleting user " + identifier);
        res.statusCode = 404;
        return res.send('Error 404: No user found');
    }

    console.log("deleted user id: " + identifier + ", " + deletedUsername);
    fs.writeFile(dataFile, JSON.stringify(users), function(err){
        if (err) {
            res.end();
            return console.log("Error writing users.json! Root cause: " + err);
        }
    });
    res.json(true);
};


// this method returns true if the user is an admin user by username/email
module.exports.getAdminUserByUsername = function(req, res) {

    var admins = readJsonDataFile(adminFile);
    var username = req.params.id;
    //console.log("try to retrieve an admin user by username/email " + username + " as identifier");
    for (var i = 0; i < admins.length; i++){
        if(admins[i].username == username){
            res.statusCode = 200;
            return res.send(username + ' is admin');
        }
    }
    res.statusCode = 404;
    return res.send('Error 404: No user with matching username found');

};



// read datafile or initialize with a new empty datafile in case no one exists
var readJsonDataFile = function(filepath){
    //console.log("entering readJsonDataFile " + filepath );
    var users = [];
    try {
        users = JSON.parse(fs.readFileSync(filepath, 'utf8'));
    }
    catch (error) {
        // json doesn't exist in filepath
        fs.writeFile(filepath, '[]', function(err){
            if (err) {
                res.end();
                return console.log("Error creating a new json " + filepath + " . Root cause: " + err);
            }
        });
        users = [];
        console.log("creating a new json " + filepath + " because it didn't already exist.");
    }
    return users;
};

// get matching user by username
var getMatchingUserByUsername = function (username){
    var users = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

    for (var i = 0; i < users.length; i++){
        if(users[i].username == username){
            var userWithMatchingUsername = users[i];
            return userWithMatchingUsername;
        }
    }
};


// get matching user by id
var getMatchingUserById = function (id){
    var users = JSON.parse(fs.readFileSync(dataFile, 'utf8'));

    if(id < 0) {
        return;
    }

    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        //console.log("in loop, user.id = " + user.id + " looking for id: " + id);
        if (user.id == id) {
            return user;
        }
    }
};



