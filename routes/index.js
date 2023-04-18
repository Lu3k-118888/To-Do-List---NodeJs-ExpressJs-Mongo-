
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homepage_controller');




router.get('/',homeController.home);
router.post('/create-task',homeController.createTask);
router.get('/delete-task',homeController.deleteTask);


module.exports = router;