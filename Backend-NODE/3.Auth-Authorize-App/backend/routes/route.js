const express = require('express');
const { signUp } = require('../controllers/auth');
const router = express.Router()


router.post('/', signUp)


//Default exports 
module.exports = router;