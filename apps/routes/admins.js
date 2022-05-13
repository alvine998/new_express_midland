var express = require('express');
var router = express.Router();
const cAdmins = require('../controllers/admins')

router.post('/create', cAdmins.create)
router.post('/login', cAdmins.login)
router.get('/list', cAdmins.list)

module.exports = router;
