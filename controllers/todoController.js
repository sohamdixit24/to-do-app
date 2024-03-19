const todoModel = require("../models/todoModel");

//Get all to-do list items
const getAllItems = async (req, res) => {
  try {
    const allData = await todoModel.find();
    res.status(200).json({ data: allData });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
  // res.send(obj);
};

//Add an item
const addItem = async (req, res) => {
  console.log(`Add item =====> ${req.body}`);
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
  const id = req.params["_id"];
  try {
    const data = await todoModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Sucessfully Deleted" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Update an item
const updateItem = async (req, res) => {
  const id = req.params._id;
  const updateData = req.body;
  const options = { new: true };
  try {
    const dataToSave = await todoModel.findByIdAndUpdate(
      id,
      updateData,
      options
    );
    res.status(200).json({ message: "Sucessfully Updated",result: dataToSave });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllItems,
  deleteItem,
  addItem,
  updateItem,
};
