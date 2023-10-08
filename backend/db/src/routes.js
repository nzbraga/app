require('dotenv').config()
const {Router} = require('express')
const UserController = require('./controller/UserController')
const jwt = require('jsonwebtoken')
const {checkToken} = require('./tools/checkToken')
const {validUserInput} = require('./tools/validateUserInput')
const {validLoginInput} = require('./tools/validateLoginInput')


const router = Router()


//open route
router.post('/create-user',validUserInput,UserController.createUser )
router.post('/login-user', validLoginInput, UserController.loginUser )

//auth routes
router.get('/get-user/:id',checkToken, UserController.getUser )
router.get('/list-users',checkToken, UserController.listUsers )
router.patch('/update-user/:id',checkToken,  UserController.updateUser )
router.delete('/delete-user/:id',checkToken, UserController.deleteUser )


module.exports = router

