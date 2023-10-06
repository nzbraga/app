require('dotenv').config()
const {Router} = require('express')
const UserController = require('./controller/UserController')
const jwt = require('jsonwebtoken')


const router = Router()

// refaturar como importação futuramente
function checkToken(req,res,next){
    
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    
    if(!token){
       return res.status(401).json({msg:"acesso negado"})
    }
    
    try {        
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
        
    } catch (error) {
        return res.status(401).json({msg:"acesso negado - token"})
        
    }

}

//open route
router.post('/create-user', UserController.createUser )
router.post('/login-user', UserController.loginUser )

//auth routes
router.get('/get-user/:id',checkToken, UserController.getUser )
router.get('/list-users',checkToken, UserController.listUsers )
router.patch('/update-user/:id',checkToken,  UserController.updateUser )
router.delete('/delete-user/:id',checkToken, UserController.deleteUser )


module.exports = router

