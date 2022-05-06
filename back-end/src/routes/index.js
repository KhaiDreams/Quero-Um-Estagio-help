const router = require("express").Router()
const Controller = require("../controllers/postsController")

router.get("/:id?", Controller.get)
router.post("/", Controller.post)
router.put("/:id", Controller.put)
router.delete("/:id", Controller.del)

module.exports = router