const express = require("express");
const { adminController } = require("../../controllers/authorization/admin");
const { checkRole } = require("../../middlewares/roles");
const router = express.Router();

router.post("/dashboard", checkRole("subscriber"), adminController);

//Default exports
module.exports = router;
