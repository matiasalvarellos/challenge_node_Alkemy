function authMiddleware(req, res, next){
  const token = req.params.token
  if(!req.session.usuarioLog ){
    return res.json({
      error: "token invalido. Intenta iniciar sesión"
    });
  }
  if(req.session.usuarioLog.id != token ){
    return res.json({
      error: "token incorrecto"
    })
  }
  if(req.session.usuarioLog && req.session.usuarioLog.id == token){
    return next()
  }
}
module.exports = authMiddleware;