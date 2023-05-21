const express = require("express");
const { event } = require("../../controllers");
const { ctrlWrapper } = require("../../middleWares");

const {
  createNotices,
  get,
  getId,
  addFavorite,
  deleteFavorite,
  deleteNotices,
  updateNotices,
  editNotices,
} = event;

const router = express.Router();

router.post("/", ctrlWrapper(get));

module.exports = routerEvent = router;
