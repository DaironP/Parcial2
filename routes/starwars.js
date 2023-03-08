const route = require('express').Router()

const {
    index,
    save,
    findById
} = require('../controllers/controll-starwars')

route.get('/',index)

route.post('/:id',save)

route.get('/:id',findById)

module.exports = route