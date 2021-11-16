const express = require('express');
const repository = require('../src/repository/repository');
const { body } = require('express-validator');
const router = new express.Router();

router.get('/init', repository.initDatabase);
router.get('/', repository.getSubscribers);
router.post('/subscribe',
    body('email').isEmail().normalizeEmail(),
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(),
    repository.addSubscriber
);

module.exports = router;