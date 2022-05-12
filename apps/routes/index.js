var express = require('express');
var router = express.Router();
const cAdmins = require('../controllers/admins')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send({message: "Hello Express"})
});

router.post('/admins', cAdmins.create)

module.exports = router;
