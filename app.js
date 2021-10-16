const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('docs'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(port, (req, res) => {console.log(`Server running on port ${port}`)});