const router = require("express").Router()
const {getData,getPDF} = require("../controller/admin.controller");

router.get('/getDataNew',getData)
router.get('/getPDF',getPDF)


module.exports = router
