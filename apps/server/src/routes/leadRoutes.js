import express from 'express';
import {
  getAllLeads,
  getAcceptedLeads,
  acceptLead,
  declineLead
} from '../controllers/leadController.js';
import { getDB } from '../db.js'; 

const router = express.Router();

router.get('/', getAllLeads);
router.get('/accepted', getAcceptedLeads);
router.post('/:id/accept', acceptLead);
router.post('/:id/decline', declineLead);

router.get('/debug', async (req, res) => {
  const db = getDB();
  const result = await db.all('SELECT * FROM leads');
  res.json(result);
});


export default router;