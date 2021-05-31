const { Movie } = require("../database/models");

module.exports = {
  create: (req, res) => {
    res.render("createMovie")
  },
  process: async (req, res) => {
    
  }
}