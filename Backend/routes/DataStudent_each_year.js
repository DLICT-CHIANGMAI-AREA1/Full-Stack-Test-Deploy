const router = require("express").Router()
const {FindDataStudentEachYear,AddData,UpdateData,DeleteData,AddSemester,DeleteDataRecordByYear} = require("../controller/DataStudentEachYear.controller");

router.post('/api/AddSemester',AddSemester)
router.get('/api/FindDataStudentYear',FindDataStudentEachYear)
router.post('/api/AddData/:id',AddData)
router.put('/api/UpdateData/:id/:ids',UpdateData)
router.delete('/api/DeleteData/:id/:ids',DeleteData)
router.delete('/api/DeleteDataRecordByYear/:id',DeleteDataRecordByYear)




module.exports = router
