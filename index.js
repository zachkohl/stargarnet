config = require('./config');

config.app.get('/', function (req, res) {
    res.send('hello world!')
});//end '/'