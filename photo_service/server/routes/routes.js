const Router = require('express')
const imagineController = require('../imagineController')
const router = new Router()

router.get('/', imagineController.getAll)
router.get('/:id', imagineController.getOne)
router.post('/', imagineController.create)
router.delete('/:id', imagineController.delete)
router.put('/:id', imagineController.update)

module.exports = router