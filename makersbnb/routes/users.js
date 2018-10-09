var express = require('express');
var router = express.Router();
var users = ['Billy', 'Bobby', 'Barry']

/* GET users listing. */
router.get('/', function(req, res) {
  res.json(users);
});

router.get('/:id', function(req, res) {
  res.json(users[req.params.id])
})

module.exports = router;
