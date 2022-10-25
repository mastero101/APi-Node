const checkSession = (req, res, next) => {
    const headeAuth = req.headers.authorization || '';
    //TODO Bearer 1111
    const token = headeAuth.split(' ').pop() //1111
    if(!token){
        res.status(405)
        res.send({error:'No tienes Token'})
    }else{
        next()
    }
}

module.exports = {checkSession};