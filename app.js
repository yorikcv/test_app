var express = require('express'),
    path = require('path'),
    app = express();


app.use(express.static(path.join(__dirname, 'public')));

app.all(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, application/json, text/plain, */*");
    res.header("Access-Control-Allow-Methods", "GET");
    return next();
});

app.get("/", function(req, res) {
    res.sendFile('index.html');
});


var port = process.env.PORT || 1337;
app.listen(port, function() {
    console.log("Listening on " + port);
});
