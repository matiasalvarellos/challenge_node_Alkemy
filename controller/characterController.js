const {Character} = require("../database/models");

module.exports = {
  create: (req,res)=>{
    res.render("createCharacter")
  }
}