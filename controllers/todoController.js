const todoModel = require("../models/todoModel");

//Get all to-do list items
const getAllItems = async (req, res) => {
  try {
    const allData = await todoModel.find();
    res.status(200).json({ data: allData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  res.send(obj);
};

//Add an item
const addItem = async (req, res) => {
  console.log(req.body);
  const data = new todoModel({
    content: req.body.content,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Delete the to do list item
const deleteItem = async (req, res) => {
  res.send(`You have removed item ${req.params["id"]}`);
};

module.exports = {
  getAllItems,
  deleteItem,
  addItem,
};
