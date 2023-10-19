require('dotenv').config()
const {Router} = require('express')
const UserController = require('./controller/UserController')
const ListController = require('./controller/ListController')
const jwt = require('jsonwebtoken')
const {checkToken} = require('./tools/checkToken')
const {validUserInput} = require('./tools/validateUserInput')
const {validLoginInput} = require('./tools/validateLoginInput')


const router = Router()

//user
//open route
router.post('/create-user',validUserInput,UserController.createUser )
router.post('/login-user', validLoginInput, UserController.loginUser )

//auth routes
router.get('/get-user/:id',checkToken, UserController.getUser )
router.get('/list-users',checkToken, UserController.listUsers )
router.patch('/update-user/:id',checkToken,  UserController.updateUser )
router.delete('/delete-user/:id',checkToken, UserController.deleteUser )

//post
//open route
router.post('/create-list', ListController.createList ) // add token futuramente

//auth route
router.patch('/update-list/:id',checkToken, ListController.updateList )
router.delete('/delete-list/:id',checkToken, ListController.deleteList )
router.get('/lists/:id',checkToken, ListController.lists )



module.exports = router

