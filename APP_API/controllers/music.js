    
const mongoose = require("mongoose");

const Music = mongoose.model('music');

const getMusics = function (req, res) {
    Music
        .find()
        .exec(function(err, musicdata) {
            if(err) {
                res
                    .status(404)
                    .json(err);
                return;
            }
            res
                .status(200)
                .json(musicdata);
        });
};

const createMusic = function (req, res) {
    Music
        .create({
            song_name: req.body.song_name,
            artist:{
                artist_name: req.body.artist.artist_name,
                age: req.body.artist.age,
                gender: req.body.artist.gender
            },
            duration: req.body.duration,
            lyricist: req.body.lyricist,
            language: req.body.language,
            rating: req.body.rating,
            released_on: req.body.released_on
        }, (err, musicdata) => {
            if(err){
                res
                    .status(400)
                    .json(err);
            }
            else {
                res
                    .status(201)
                    .json(musicdata);
        }
    });  
};

const getSingleMusic = function (req, res) {
    Music
        .findById(req.params.musicid)
        .exec(function(err, musicdata) {
            res
                .status(201)
                .json(musicdata);
        });
};

const updateMusic = function (req, res) {

    if(!req.params.musicid){
        res
            .status(404)
            .json({"message": "Not found, Music_id is required"});
        return;
    }
    Music
        .findById(req.params.musicid)
        .exec((err, musicdata) => {
            if(!musicdata) {
                res
                    .status(404)
                    .json({"message": "Music_id not found"});
                return;
            }
            else if(err){
                res
                    .status(400)
                    .json(err);
                return;
            }
            musicdata.song_name = req.body.song_name;
            musicdata.artist.artist_name = req.body.artist.artist_name;
            musicdata.artist.age = req.body.artist.age;
            musicdata.artist.gender = req.body.artist.gender;
            musicdata.duration = req.body.duration;
            musicdata.lyricist = req.body.lyricist;
            musicdata.language = req.body.language;
            musicdata.rating = req.body.rating;
            musicdata.released_on = req.body.released_on;

            musicdata.save((err, musicdata)=>{
                if(err){
                    res
                        .status(404)
                        .json(err);
                }
                else{
                    res
                        .status(200)
                        .json(musicdata);
                }
            });

    });

};

const deleteMusic = function (req, res) {

    const musicid=req.params.musicid;

   if(musicid){
       Music
            .findByIdAndRemove(musicid)
            .exec((err, musicdata) => {
                if(err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(204)
                    .json(null);
            });
   }
   else {
        res
            .status(404)
            .json({"message": "Music_id not found"});
   }
};


module.exports = {
    getMusics,
    createMusic,
    getSingleMusic,
    updateMusic,
    deleteMusic
};
    
