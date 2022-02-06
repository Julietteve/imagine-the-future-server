const { Router } = require('express')
const router = Router()
const { postArticle, getArticle} = require('../controllers/article')

router.post('/', postArticle)
router.get('/:id?', getArticle)

module.exports = router