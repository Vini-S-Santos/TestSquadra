import express from 'express';
import {
  getAllLeads,
  getAcceptedLeads,
  acceptLead,
  declineLead
} from '../controllers/leadController.js';

const router = express.Router();

router.get('/', getAllLeads);
router.get('/accepted', getAcceptedLeads);
router.post('/:id/accept', acceptLead);
router.post('/:id/decline', declineLead);

export default router;