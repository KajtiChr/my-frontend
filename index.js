const express = require('express');

const redis = require('redis');

const app = express();

const client = redis.createClienr({
	host: 'localhost",
port: 6379
});


app.get('/', (req, resp) => {
	resp.send('Hello from node backend');

});


app.listen(8080, () => {
	console.log('Server listening on port 8080');
});

  



