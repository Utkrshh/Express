const express = require('express');
const app = express();

// Define an array to store user information
var users = [];

app.use(express.json());

app.post("/signup", (req, res) => {
    var newUser = req.body; // Renamed to newUser to avoid conflict with outer 'user' variable
    let userAlreadyExists = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === newUser.email) {
            
            userAlreadyExists = true;
            break;
        }
    }

    if (userAlreadyExists) {
        res.sendStatus(400);
    } else {
        users.push(newUser);
        res.status(201).send("Signup successful");
    }
});

app.post("/login", (req, res) => {
    var loginUser = req.body; // Renamed to loginUser
    let userFound = null;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === loginUser.email) {
            userFound = users[i];
            break;
        }
    }

    if (userFound) {
        res.json({
            firstname: userFound.firstname,
            lastname: userFound.lastname,
            email: userFound.email
        });
    } else {
        res.sendStatus(401);
    }
});

app.get("/data", (req, res) => {
    var email = req.headers.email;
    var password = req.headers.password;
    let userFound = false;
    for (var i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            userFound = true;
            break;
        }
    }

    if (userFound) {
        let usersToReturn = [];
        for (var i = 0; i < users.length; i++) {
            usersToReturn.push({
                firstname: users[i].firstname,
                lastname: users[i].lastname,
                email: users[i].email
            });
        }
        res.json(usersToReturn);
    } else {
        res.sendStatus(401);
    }
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
