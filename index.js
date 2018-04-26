var express = require('express');

var app = express();

app.get('/', (req,res) => {
	return res.send('README')
});

app.listen(8000,() => console.log('Listening on port 8000'));