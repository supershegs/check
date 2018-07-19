import express from 'express';

const api = express.Router();

api.get('/v2', (req, res) => {
    res.send('version one ok');
});

export default api;