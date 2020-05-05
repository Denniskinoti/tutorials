const express = require('express');
const users = require('../controller/user')
const route = express.Router();

route.get('/',users.persons);
route.post('/new',users.person);
route.delete('/remove/:id',users.removePerson)
route.get('/:id/edit',users.editUser)
route.put('/update/:id',users.updatePerson)
route.get('/:id',users.singleUser);


route.param('userById',users.userById)

module.exports = route
