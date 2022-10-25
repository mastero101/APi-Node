const express = require("express");
const router = express.Router();
const {
  getDetail,
  getList,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/video");

const {checkSession} = require('../middlewares/origin')
//TODO http://localhost:3001/v1/videos
/**
 * Lista de videos
 */
router.get("",getList);
router.get("/:id",getDetail);
router.post("",createItem);
router.delete("/:id", checkSession, deleteItem);
router.put("/:id",updateItem);

module.exports = router;
