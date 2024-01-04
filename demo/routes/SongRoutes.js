const express = require("express")
const {
    getAllSongs,
    createSong,
    getSongById,
    updateSong,
    deleteSong,
} = require("../controllers/SongControllers");
const router = express.Router();

router.route("/").get(getAllSongs).post(createSong);
router.route("/:id").get(getSongById).put(updateSong).delete(deleteSong);

module.exports = router;