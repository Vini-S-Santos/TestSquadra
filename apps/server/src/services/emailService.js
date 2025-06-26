import fs from 'fs';

export const sendFakeEmail = (lead) => {
  const message = `Simulação de email para vendas@test.com:\n${JSON.stringify(lead, null, 2)}\n\n`;
  fs.appendFileSync('sent_emails.txt', message);
};