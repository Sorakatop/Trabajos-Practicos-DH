var express = require('express');
var router = express.Router();
let controller = require('../controller/detalleController')

/* GET home page. */
router.get('/:producto', controller.index)
/*router.get('/detalle/:id', controller.product) */

module.exports = router