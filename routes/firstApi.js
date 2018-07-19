import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('version one ok');
});

export default router;