const router = require("express").Router()
const {FindDataEachYear,FindDataEachYearById,FindDataEachYearByDate,DeleteDataDate,DeleteDataYear,UpdateData,DeleteData,AddSemester,DeleteDataRecordDate} = require("../controller/DataEachYear.controller");

//router.post('/api/AddSemester',AddSemester)
router.get('/api/FindDataEachYear',FindDataEachYear)
router.get('/api/FindDataEachYearById/:id',FindDataEachYearById)
router.get('/api/FindDataEachYearByDate/:param1/:param2',FindDataEachYearByDate)
//router.post('/api/AddData/:id',AddData)
//router.put('/api/UpdateData/:id/:ids',UpdateData)
router.delete('/api/DeleteData/:param1/:param2/:param3/:id',DeleteData)
router.delete('/api/DeleteDataDate/:param1/:id',DeleteDataDate)
router.delete('/api/DeleteDataYear/:id',DeleteDataYear)
router.delete('/api/DeleteDataRecordDate/:param1/:id',DeleteDataRecordDate)




module.exports = router
