const express = require("express");
const verifyRoles = require("../../middleware/verifyRoles");
const ROLES_LIST = require("../../config/roles_list");
const {
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
  getUser,
  archiveUser,
  checkEmailDuplication,
} = require("../../controllers/usersController");
const router = express.Router();

router
  .route("/")
  .get(verifyRoles(ROLES_LIST.SuperAdmin), getAllUsers)
  .post(createUser)
  .put(verifyRoles(ROLES_LIST.SuperAdmin), updateUser)
  .delete(verifyRoles(ROLES_LIST.SuperAdmin), deleteUser)
  .patch(verifyRoles(ROLES_LIST.SuperAdmin), archiveUser);

router
  .route("/email")
  .post(verifyRoles(ROLES_LIST.SuperAdmin), checkEmailDuplication);

router.route("/:id").get(getUser);

module.exports = router;
