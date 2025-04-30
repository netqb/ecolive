const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/catalog', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'catalog.html'));
});


app.get('/region', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'region.html'));
});

app.get('/mortgage', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mortgage.html'));
});

app.get('/object', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'object.html'));
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});

