const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const controller = require("../controllers/event");

router.post("/", auth, role("admin"), controller.createEvent);
router.get("/", controller.getEvents);
router.get("/:id", controller.getEvent);
router.patch("/:id", auth, role("admin"), controller.updateEvent);
router.delete("/:id", auth, role("admin"), controller.deleteEvent);

module.exports = router;