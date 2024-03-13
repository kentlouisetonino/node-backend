import express from 'express';
import OpenAIController from '../controllers/OpenAIController';

// Express router instance.
const router = express.Router();

router.post('/chat', OpenAIController.chat);

export default router;
