const db = require("../database/models");
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");

module.exports = {
  login: function(req, res){

    res.render("login");

  },
  processLogin: async function(req, res){

    const errors = validationResult(req);

    if(!errors.isEmpty()){
      let old = req.body;
      return res.render("login", { old, errors:errors.errors})
    }

    let userFound = await db.User.findOne({
      where:{
        email: req.body.email
      }
    })

    req.session.usuarioLog = userFound;

    res.redirect("/");
  },
  register: function(req, res){

    res.render("register");

  },
  processRegister: async function(req, res){

    const errors = validationResult(req);
    if(!errors.isEmpty()){
      let old = req.body
      return res.render("register", { old, errors:errors.errors } )
    }

    let user = await db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10)
    })

    req.session.usuarioLog = user;

    res.redirect("/");

  },
  logout: function(req, res){

    req.session.destroy()

    res.redirect("/")

  }
}