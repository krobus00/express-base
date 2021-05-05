const {
  getData,
  addData,
  updateData,
  deleteData,
} = require('../controllers/api.controller')

const router = require('express').Router()

router.get('/', getData)
router.post('/', addData)
router.put('/:id', updateData)
router.delete('/:id', deleteData)

module.exports = router
