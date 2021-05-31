function guestMiddleware(req, res, next) {
  if(!req.session.usuarioLog){
    return next()
  }
  return res.redirect("/")
}
module.exports = guestMiddleware;