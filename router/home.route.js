const { Router } = require('express');
const router = Router();

const homeController = require('../controllers/home.controller');

router.get('/', homeController.index)
router.get('/register', homeController.getRegister);
router.post('/register', homeController.postRegister);
router.get('/login', homeController.getLogin)
router.post('/login', homeController.postLogin)

module.exports = router;