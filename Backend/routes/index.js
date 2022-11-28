const router = require("express").Router();

const opm = require("./opm");
const DataEachYear = require("./DataEacahYear")
const Person = require("./Person");

router.use("/admin", opm);
router.use("/admin", DataEachYear);
router.use("/admin", Person);


module.exports = router;
