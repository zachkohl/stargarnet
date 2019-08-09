config = require('./config');

config.app.get('/', function (req, res) {
   // res.send('hello world!')
   res.render('home',{message:"hello world"})
});//end '/'


config.app.get('/test', function (req, res) {

    res.render('test',{message:"hello world"})
 });//end '/home'