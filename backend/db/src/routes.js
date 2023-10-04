const {Router} = require('express')
const UserController = require('./controller/UserController')


const router = Router()


router.post('/create-user', UserController.createUser )
router.put('/update-user/:id', UserController.updateUser )
router.get('/list-users', UserController.listUsers )
router.get('/get-user/:id', UserController.getUser )
router.delete('/delete-user/:id', UserController.deleteUser )


module.exports = router

