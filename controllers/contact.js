

const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  try {
    const result = await mongodb.getDatabase().db().collection('contact').find();
    const contacts = await result.toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(contacts);
  } catch (err) {
    console.error("Error getting all contacts:", err);
    res.status(500).json({ message: "Failed to retrieve contacts." });
  }
};

const getSingle = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contact').findOne({ _id: userId });
    if (result) {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Contact not found." });
    }
  } catch (err) {
    console.error("Error getting single contact:", err);
    res.status(500).json({ message: "Failed to retrieve contact." });
  }
};

module.exports = {
  getSingle,
  getAll
};