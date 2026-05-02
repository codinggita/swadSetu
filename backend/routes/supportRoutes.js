import express from 'express';
import { sendSupportRequest } from '../controllers/supportController.js';

const router = express.Router();

router.post('/request', sendSupportRequest);

export default router;
