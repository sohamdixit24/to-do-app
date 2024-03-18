const express = require("express");
const router = express.Router();
const todoController = require('../../controllers/todoController');

//mapping controllers with routes
router.get('/getItems',todoController.getAllItems);
router.post('/addItem',todoController.addItem);
router.delete("removeItems/:id",todoController.deleteItem);

//exporting routes 
module.exports = router;
