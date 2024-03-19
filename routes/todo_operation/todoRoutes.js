const express = require("express");
const router = express.Router();
const todoController = require('../../controllers/todoController');

//mapping controllers with routes
router.get('/getItems',todoController.getAllItems);
router.post('/addItem',todoController.addItem);
router.delete("/removeItem/:_id",todoController.deleteItem);
router.patch("/updateItem/:_id",todoController.updateItem);

//exporting routes 
module.exports = router;
