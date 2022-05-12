var express = require('express');
var router = express.Router();
const cAdmins = require('../controllers/admins')

router.post('/create', cAdmins.create)
router.post('/login', cAdmins.login)

module.exports = router;
