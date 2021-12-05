import {v4 as uuidv4} from 'uuid';

let users = [];

export let createUser = function (req, res)  {
    const user = req.body;

    users.push(user);
    user.id = uuidv4();

    res.send(`User with the name ${user.firstName} added to the database`);
}

export let getUsers = function (req, res) {
    console.log(users);
    res.send(users);
}

export let getUserByID = function (req, res) {
    const {id} = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

export let deleteUser = function (req, res) {
    const {id} = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`User with id ${id} deleted from the database`);
}

export let updateUser = function (req, res) {
    const {id} = req.params;

    const {firstName, lastName, age} = req.body;

    const user = users.find((user) => user.id == id)

    if (firstName) {
        user.firstName = firstName;
    }

    if (lastName) {
        user.lastName = lastName;
    }

    if (age) {
        user.age = age;
    }

    res.send(`User with id ${id} has been updated`);
}