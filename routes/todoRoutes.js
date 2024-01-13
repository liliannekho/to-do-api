const express = require('express')
const router = express.Router()
const todoCtrl = require('../controllers/todos')
const userController = require('../controllers/userController')


router.get('/', userController.auth, todoCtrl.indexNotComplete)
router.get('/', userController.auth, todoCtrl.indexComplete)
router.delete('/:id', userController.auth, todoCtrl.deleteUser)
router.put('/:id', userController.auth, todoCtrl.updateUser.update)
router.post('/', userController.auth, todoCtrl.create)
router.get('/:id', userController.auth, todoCtrl.show)

module.exports = router