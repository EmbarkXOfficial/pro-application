const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from 'public' folder
app.use(express.static('public'));

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Simple Web App');
});

// Another API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'This is a simple API endpoint', data: [1, 2, 3, 4, 5]});
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
