const express = require('express');
const redis = require('redis');
const app = express();
const process = require('process');

const client = redis.createClient({

    host: 'redis-server',
    port: 6379

});



app.get('/:factorial', (req, resp) => {



    const number = req.params.factorial;

    console.log('Your number: ' + number);

    if(number >= 10)

        process.exit(1);



    client.get('Result', (err, result) => {

        if (!result) {

            const Result = factorial(number);

            client.set(number, parseInt(Result));

            resp.send('Result: ' + Result);

        }

        else {

            resp.send('Result: ' + result);

        }

    });

});




app.listen(8080, () => {

    console.log('Server running on port 8080');

});

function factorial(value) {

    if (value === 0) {

        return 1;

    } else {

        return value * factorial(value - 1);

    }

}
