const router = require("express").Router();
const {
    FindDataStudentWebService,
    DeleteDataWebService,
    AddDataDataWebService,
    AddSemesterDataWebService,
    UpdateDataDataWebService,
    DeleteDataRecordByYearDataWebService,
} = require("../controller/DataStudentWebService.controller");

router.get("/api/FindDataStudentWebService", FindDataStudentWebService);
router.delete("/api/DeleteDataWebService/:id/:ids", DeleteDataWebService);
router.post("/api/AddSemesterDataWebService", AddSemesterDataWebService);
router.post("/api/AddDataWebService/:id", AddDataDataWebService);
router.put("/api/UpdateDataDataWebService/:id/:ids", UpdateDataDataWebService);
router.delete("/api/DeleteDataRecordByYearDataWebService/:id", DeleteDataRecordByYearDataWebService);

module.exports = router;
