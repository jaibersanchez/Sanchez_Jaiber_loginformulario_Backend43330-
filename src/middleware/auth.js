
export function isAdmin(req, res, next) {
    if (req.session?.isAdmin) {
      return next();
    }
    return res.status(403).render('error', { error: 'Error de autorización' });
  }
  
 
  export function isUser(req, res, next) {
    if (req.session?.email) {
      return next();
    }
    return res.status(401).render('error', { error: 'Error de autenticación' });
  }

  export function auth(req,res,next){
    if(req.session?.email !== 'adminCoder@coder.com' || !req.session?.admin === 'admin'){
        next ()
    }
    res.status(401).send('Rol usuario')
}