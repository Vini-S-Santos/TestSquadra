import { initDB } from './db.js';

const seed = async () => {
  const db = await initDB();

  const leads = [
    {
      firstName: 'Lucas',
      fullName: 'Lucas Martins',
      phone: '11999999999',
      email: 'lucas@example.com',
      suburb: 'São Paulo',
      category: 'Elétrica',
      description: 'Troca de disjuntor',
      price: 300,
      createdAt: new Date().toISOString()
    },
    {
      firstName: 'Ana',
      fullName: 'Ana Paula Souza',
      phone: '11988888888',
      email: 'ana@example.com',
      suburb: 'Campinas',
      category: 'Hidráulica',
      description: 'Conserto de vazamento',
      price: 750,
      createdAt: new Date().toISOString()
    },
    {
      firstName: 'Carlos',
      fullName: 'Carlos Alberto',
      phone: '11977777777',
      email: 'carlos@example.com',
      suburb: 'Santos',
      category: 'Reforma',
      description: 'Pintura de cômodos',
      price: 520,
      createdAt: new Date().toISOString()
    }
  ];

  for (const lead of leads) {
    await db.run(
      `INSERT INTO leads (firstName, fullName, phone, email, suburb, category, description, price, createdAt)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        lead.firstName,
        lead.fullName,
        lead.phone,
        lead.email,
        lead.suburb,
        lead.category,
        lead.description,
        lead.price,
        lead.createdAt
      ]
    );
  }

  console.log('Banco populado com dados fictícios.');
  process.exit();
};

seed();
