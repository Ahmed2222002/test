import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', (req, res) => {
    res.send('Hello World! from test');
})

app.listen(4000, () => {
    console.log('Example app listening on port 4000!');
});