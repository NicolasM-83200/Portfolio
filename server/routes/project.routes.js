const express = require("express");
const router = express.Router();
const projectCtrl = require("../controllers/project.controller");
const auth = require("../middleware/auth");
const sharp = require("../middleware/sharp-config");

router.post(
  "/",
  auth,
  sharp.upload,
  sharp.compressImage,
  projectCtrl.createProject
);
router.get("/", projectCtrl.getAllProjects);
router.get("/:id", projectCtrl.getOneProject);
router.put(
  "/:id",
  auth,
  sharp.upload,
  sharp.compressImage,
  projectCtrl.modifyProject
);
router.delete("/:id", projectCtrl.deleteProject);

module.exports = router;
