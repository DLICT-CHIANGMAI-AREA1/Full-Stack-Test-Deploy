const router = require("express").Router()
const {FindDataStudentEachYear} = require("../controller/DataStudentEachYear.controller");


router.get('/api/FindDataStudentYear',FindDataStudentEachYear)



module.exports = router
