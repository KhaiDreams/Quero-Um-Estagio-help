const router = require("express").Router()
const Controller = require("../controller")

router.get("/:id?", Controller.get)
router.post("/", Controller.post)
router.put("/:id", Controller.put)
router.delete("/:id", Controller.del)

module.exports = router