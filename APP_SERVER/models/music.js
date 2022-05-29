
var mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
    artist_name: {
        type: String,
        required: true,
        minlength: 3
    },
    age:{
        type:Number,
        required: false,
        min:5
    },    
    gender: {
        type: String,
        required: false
    }
});

const musicSchema = new mongoose.Schema({
    song_name: {
        type: String,
        required: true,
        minlength: 3
    },
    artist: artistSchema,
    duration: {
        type: String,
        required: true,
        'default': 0
    },
    lyricist: {
        type: String,
        required: false
    },
    language: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        'default': 0,
        required: false,
        min: 0,
        max: 5
    },
    released_on: {
        type: Date,
        'default': Date.now,
        required: true
    }
});

var Music = mongoose.model( 'music', musicSchema);

module.exports = {
    Music
}