import { getDB } from '../db.js';
import { sendFakeEmail } from '../services/emailService.js';

export const getAllLeads = async (req, res) => {
  const db = getDB();
  const leads = await db.all('SELECT * FROM leads');
  res.json(leads);
};

export const getAcceptedLeads = async (req, res) => {
  const db = getDB();
  const leads = await db.all("SELECT * FROM leads WHERE status = 'accepted'");
  res.json(leads);
};

export const acceptLead = async (req, res) => {
  const db = getDB();
  const { id } = req.params;
  const lead = await db.get('SELECT * FROM leads WHERE id = ?', id);

  if (!lead) return res.status(404).json({ error: 'Lead não encontrado' });

  let price = lead.price;
  if (price > 500) {
    price = price * 0.9;
  }

  await db.run(
    'UPDATE leads SET status = ?, price = ? WHERE id = ?',
    ['accepted', price, id]
  );

  sendFakeEmail({ ...lead, price });

  res.json({ message: 'Lead aceito com sucesso', id, newPrice: price });
};

export const declineLead = async (req, res) => {
  const db = getDB();
  const { id } = req.params;

  await db.run('UPDATE leads SET status = ? WHERE id = ?', ['declined', id]);

  res.json({ message: 'Lead recusado com sucesso', id });
};