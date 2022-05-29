var express = require('express');
var router = express.Router();

const ctrlMusic = require('../controllers/music');

router.get('/musics', ctrlMusic.getMusics);
router.post('/musics',ctrlMusic.createMusic);

router.get('/musics/:musicid', ctrlMusic.getSingleMusic);
router.put('/musics/:musicid', ctrlMusic.updateMusic);
router.delete('/musics/:musicid', ctrlMusic.deleteMusic);

module.exports = router;