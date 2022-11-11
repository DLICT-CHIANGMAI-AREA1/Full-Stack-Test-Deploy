const router = require("express").Router()
const {FindDataStudentEachYear,AddData,UpdateData,DeleteData,AddSemester} = require("../controller/DataStudentEachYear.controller");

router.post('/api/AddSemester',AddSemester)
router.get('/api/FindDataStudentYear',FindDataStudentEachYear)
router.post('/api/AddData',AddData)
router.put('/api/UpdateData',UpdateData)
router.delete('/api/DeleteData/:id/:ids',DeleteData)




module.exports = router
