const jwt = require('jsonwebtoken')
const config = require('../config/config')

function createToken(user){
    const token = jwt.sign(
        {
            id: user.dataValues.id
        },
        config.secretKey,
        {
            expiresIn: 3600
        }
    )
    
    return token
}

function verifyToken(req,res,next){
    let token
    if (req.headers['autorization']){
        token = req.headers['autorization']
    }
    if (token){
        token = token.replace(/bearer|jwt\s+/i, '')
        jwt.verify(token,config.secretKey,(err, decodedToken)=>{
            if (err){
                res.send(err)
            }
            req.userId = decodedToken
            next()
        })
    }else{
        res.send('err')
    }
}

module.exports = {
    createToken,
    verifyToken,
}