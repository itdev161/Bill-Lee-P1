import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';
import cors from 'cors';

const Sport = require('../Bill-Lee-P1/models/Sports');

// Initialize express application
const app = express();
app.use(
    cors({
        origin: 'http://localhost:3000'
    })
);

// Connect Database
connectDatabase();

// Configure Middleware
app.use(express.json({ extended: false }));

//Return all Sports input
app.get('/', async (req,res) => {
    try {
        const sports = await Sport.find();
        res.json(sports);
    } catch (err) {
        res.json({ message: err});
    }
});

//Submit new Sports
app.post('/', async (req,res) => {
    const sport = new Sport({
        sport: req.body.sport,
        team: req.body.team
    });
    try { 
        const savedSports = await sport.save();
    res.json(savedSports);
    } catch (err) {
        res.json({message: err });
    }
});


const port = 5000;
app.listen(port, () => console.log(`Express server running on port ${port}`));