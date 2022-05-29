var mongoose = require("mongoose");

var dbURI = "mongodb+srv://jeni7773:7773jeni@cluster0.5p7mp.mongodb.net/mymusicDB?retryWrites=true&w=majority";

mongoose.connect(dbURI, {
    dbName: 'mymusicDB',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

require('./music');