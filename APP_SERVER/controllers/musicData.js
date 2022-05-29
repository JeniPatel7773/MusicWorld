const { response } = require("express")

const request = require('request');
const apiOptions = {
    server: 'http://localhost:3000'
};

const musiclist = function(req, res) {
    const path = `/api/musics`;
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'GET',
        json: {}
    };
    request(
        requestOptions, 
        (err, response, body) => {
        _renderHomepage(req, res, body);
        }
    );
};

const _renderHomepage = function(req, res, responseBody){
    console.log(responseBody);
    res.render('list-display', {
          musicList: responseBody 
    });
};

const musicDetails = function(req, res){
    const path=`/api/musics/${req.params.musicid}`;
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {}
    };
    request(
        requestOptions,
        (err, response, body) => { 
            _renderDetailPage(req, res, body);
        } 
    );
}; 

const _renderDetailPage = function(req, res, responseBody) {
    res.render('details', {
         currentMusic : responseBody
     });
 };

const _renderCreatePage = function(req, res) {
    res.render('create', {
        title: "Create"
    });
};

const addNewMusic = function(req, res) {
    _renderCreatePage(req, res);
};

const doAddNewMusic = function(req, res) {
    const path = '/api/musics';
    const postdata = {
        song_name: req.body.song_name,
        artist_name: req.body.artist_name,
        age: req.body.age,
        gender: req.body.gender,
        duration: req.body.duratin,
        lyricist: req.body.lyricist,
        language: req.body.language,
        rating: req.body.rating,
        released_on: req.body.released_on
    };
    const requestOptions = {
        url: apiOptions.server + path,
        method: 'POST',
        json: postdata
    };
    request(
        requestOptions,
        (err, response, body) => {
            if(response.statusCode === 201) {
                res.redirect('/list');
            }
        }
    );
};

module.exports = {
    musiclist, musicDetails, doAddNewMusic, addNewMusic
};


/*var musicDataList = [
    {
        "song" : "Vaaste",
        "artist" : "Dhvani Bhanushali"
    },
    {
        "song" : "Yummy",
        "artist" : "Justin Beiber"
    },
    {
        "song" : "Khairiyat",
        "artist" : "Arijit Singh"
    },
    {
        "song" : "Yeh Dua Hai Meri",
        "artist" : "Kumar Sanu"
    },
    {
        "song" : "Tu Chahiye",
        "artist" : "Atif Aslam"
    },
    {
        "song" : "Nevada",
        "artist" : "Kerala Dust"
    },
    {
        "song" : "Dil To Pagal Hai",
        "artist" : "Lata Mangeshkar"
    },
    
    {
        "song" : "Pehla Nasha",
        "artist" : "Udit Narayan"
    },
    {
        "song" : "Lockdown",
        "artist" : "Anderson Paak"
    }
];

const listDisplay = function(req, res){
    res.render('list-display',{musicList:musicDataList});
};

module.exports = { listDisplay };*/