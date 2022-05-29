var express = require('express');
var router = express.Router();


const ctrlAbout = require('../controllers/about');
const ctrlMusicData = require('../controllers/musicData');
const ctrldisplay = require('../controllers/display');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title:'MusicWorld'});
});

router.get('/about',ctrlAbout.about);
router.get('/list',ctrlMusicData.musiclist);
router.get('/display',ctrldisplay.display);
router.get('/musics/:musicid',ctrlMusicData.musicDetails);

router.route('/createNew')
.get(ctrlMusicData.addNewMusic)
.post(ctrlMusicData.doAddNewMusic);


module.exports = router;
