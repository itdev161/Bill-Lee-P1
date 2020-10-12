import express from 'express';


// Initialize express application
const app = express();

// Connect database


// API endpoints
app.get('/', (req, res) =>
    res.send('https get request sent to root api endpoint')
);

// Connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));