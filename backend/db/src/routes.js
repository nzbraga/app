const {Router} = require('express')
const UserController = require('./controller/UserController')


const router = Router()

function checkToken(req,res,next){
    const authHeader = req.headers['autorization']
    const token = authHeader && authHeader.split(" ")[1]

    if(!token){
       return res.status(401).json({msg:"acsso negado"})
    }
    try {
        const secret = process.env.SECRET
        jwt.verify(token, secret)
        next()
        
    } catch (error) {
        return res.status(401).json({msg:"acsso negado - token"})
        
    }

    
}


//open route
router.post('/create-user', UserController.createUser )
router.post('/login-user', UserController.loginUser )
router.get('/get-user/:id',checkToken, UserController.getUser )

//auth routes
router.get('/list-users', UserController.listUsers )
router.patch('/update-user/:id',  UserController.updateUser )
router.delete('/delete-user/:id', UserController.deleteUser )


module.exports = router

