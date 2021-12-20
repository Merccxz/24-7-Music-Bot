const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('Chirp Is Ready'));

app.listen(port, () => console.log(`Chirp is listening to http://localhost:${port}`));