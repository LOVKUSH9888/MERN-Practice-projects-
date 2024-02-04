const express = require("express");
const {
  getResource,
  createResource,
  updateResource,
  deleteResource,
} = require("../../controllers/resources/resources");
const authMiddleware = require("../../middlewares/authMiddleware");
const authAdmin = require("../../middlewares/adminAuthorize");

const router = express.Router();

router.get("/res", authMiddleware, getResource);
router.post("/res/create", authMiddleware, authAdmin, createResource);
router.put("/res/update/:id", authMiddleware, authAdmin, updateResource);
router.delete("/res/delete/:id", authMiddleware, authAdmin, deleteResource);

module.exports = router;
