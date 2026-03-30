const router = require("express").Router();
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");
const { bookTicket } = require("../controllers/booking");

router.post("/:id/book", auth, role("user"), bookTicket);

module.exports = router;