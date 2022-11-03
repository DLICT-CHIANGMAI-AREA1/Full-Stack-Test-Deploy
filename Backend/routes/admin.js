const router = require("express").Router()
const {CreatePDF,getMessageFormat,FindOP} = require("../controller/admin.controller");
const upload = require('../middleware/upload')

router.post('/api/CreatePDF',upload.single('file'),CreatePDF)
router.get('/api/FindPDF',FindOP)
router.get('/api/getMessage',getMessageFormat)


module.exports = router
