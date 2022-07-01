const {Router} = require('express')
const {getTask} = require('../controllers/index')
const router = Router()

router.get('/', getTask)

module.exports = router