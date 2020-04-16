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

function verifyToken(req,res){
    let Bearer = 'Bearer'
    let token
    if (req.headers['authorization']){
        let str = req.headers['authorization']
        token = str.slice(Bearer.length + 1)
    }
    if (token){
        jwt.verify(token,config.secretKey,(err,decodedToken)=>{
            if (decodedToken){
                req.decodedTokenId = decodedToken.id
            }else{
                res.status(203).send({
                    err
                })
            }
        })
    }else{
        res.send({
            msg: 'Токена нет'
        })
    }
}

module.exports = {
    createToken,
    verifyToken,
}