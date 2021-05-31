const {body} = require("express-validator");
const {User} = require("../database/models");
const bcrypt = require("bcryptjs");

module.exports = {
  login:[
    body("email")
      .notEmpty()
      .withMessage("Email requerido")
      .bail()
      .isEmail()
      .withMessage("Email formato invalido")
      .custom(function(value, {req}){
        return User.findOne({
          where:{
            email: value
          }
        }).then(userFound =>{

          if(!userFound){
            return Promise.reject("Usuario o contraseña invalidos")
          }
          if(!bcrypt.compareSync(req.body.password, userFound.password)){
            return Promise.reject("Usuario o contraseña invalidos")
          }
        })
      }),
    body("password")
      .notEmpty()
      .withMessage("Password Requerido")
  ],
  regis:[
    body("name")
      .notEmpty()
      .withMessage("Nombre Requerido"),
    body("email")
      .notEmpty()
      .withMessage("Email Requerido")
      .bail()
      .isEmail()
      .withMessage("Email formato invalido"),
    body("password")
      .notEmpty()
      .withMessage("Password Requerido")
      .bail()
      .isLength({min:4})
      .withMessage("Password minimo 4 caracteres")
      .bail()
      .custom(function(value, {req}){
        return value == req.body.repassword
      })
      .withMessage("Las contraseñas no coinciden"),
    body("repassword")
      .notEmpty()
      .withMessage("campo de repetir password invalido")        
  ]
}