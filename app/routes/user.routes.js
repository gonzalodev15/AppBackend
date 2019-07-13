module.exports = (app) =>{
    const users = require('../controllers/user.controller.js');

    // Create a new user
    app.post('/users', users.create);

    //Retrieve all Notes
    app.get('/users', users.findAll);

    //Retrieve specific User with id
    app.get('/users/:userId', users.findOne);

    //Update a User with UserId
    app.put('/users/:userId', users.update);

    // Delete User with UserId
    app.delete('/users/:userId', users.delete);
}