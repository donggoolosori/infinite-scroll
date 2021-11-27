import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(204).send();
});

export default router;
