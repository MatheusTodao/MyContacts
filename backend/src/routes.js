const { Router } = require('express');
const CategoryController = require('./app/controllers/CategoryController');

const ContactController = require('./app/controllers/ContactController');

const routes = Router();

// Contacts
routes.get('/contacts', ContactController.index);
routes.get('/contacts/:id', ContactController.show);
routes.post('/contacts', ContactController.store);
routes.put('/contacts/:id', ContactController.update);
routes.delete('/contacts/:id', ContactController.delete);

// Categories
routes.get('/categories', CategoryController.index);
routes.get('/categories/:id', CategoryController.show);
routes.post('/categories', CategoryController.store);
routes.delete('/categories/:id', CategoryController.delete);
module.exports = routes;
