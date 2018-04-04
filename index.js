const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.get('/api/get-stuff', (req, res)=>{
    res.send({success: true, message: 'got some good sh*t for ya m8'});
});

app.get('/', (req, res) => {
    res.send('<h1>Server\'s up, Broseidon</h1>')
});

app.listen(PORT, () => {
    console.log(`Server\'s listenin\' on port ${PORT}, brah`);
});