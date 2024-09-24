const express = require('express');
const router = express.Router();
const raymond = require('../controller/MonController')

router.get('/', raymond.mon);
router.get('/about', raymond.mon1);
router.get('/service', raymond.mon2);
router.get('/contact', raymond.mon3);
router.get('/home', raymond.mon4);
module.exports = router;