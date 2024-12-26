const express = require('express');
const router = express.Router();
const returnInfoController = require('../controller/returnInfoController');

router.post('/returnInfo', returnInfoController.createReturnInfo);
router.get('/returnInfo', returnInfoController.getAllReturnInfos);
router.get('/returnInfo/:id', returnInfoController.getReturnInfoById);
router.put('/returnInfo/:id', returnInfoController.updateReturnInfo);
router.delete('/returnInfo/:id', returnInfoController.deleteReturnInfo);

module.exports = router;
