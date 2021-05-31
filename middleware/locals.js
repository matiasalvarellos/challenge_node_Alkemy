function localsMiddleware(req, res, next){
  res.locals.token = false;
  if (req.session.usuarioLog){
    res.locals.token = {
      id: req.session.usuarioLog.id,
      name: req.session.usuarioLog.name
    }
    return next();
  }
  return next();
}

module.exports = localsMiddleware;