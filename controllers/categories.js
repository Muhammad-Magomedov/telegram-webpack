const Category = require('../models/Category');

const controllers = {
  getCategories: async (req,res) => {
    const getCategories = await Category.find().lean
    res.json(getCategories)
  }
}

module.exports = controllers;