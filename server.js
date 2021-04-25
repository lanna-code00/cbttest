const express = require('express');
const path = require('path');
const app = express();
// app.use(requireHTTPS);

app.use(express.static(__dirname + '/dist/newcbt3'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/newcbt3/index.html'));
});

app.listen(process.env.PORT || 8080);