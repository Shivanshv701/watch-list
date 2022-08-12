const express = require('express');
const { Add, GetList, DeleteList } = require('../Controller/controller');
const { Authorization } = require('../Authorization/Authorization');
const swaggerui = require('swagger-ui-express');
const swaggerdocument = require('../swagger.json')
const router = express.Router();

router.post('/add', Authorization, Add);
router.get('/get', Authorization, GetList);
router.delete('/delete/:_id', Authorization, DeleteList);

router.use('/api-docs', swaggerui.serve);
router.get('/api-docs', swaggerui.setup(swaggerdocument));

module.exports = router;