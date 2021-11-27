import express from 'express';
import UserController from './user.controller';

const router = express.Router();

router.get('/:offset', UserController.getUser);

export default router;
