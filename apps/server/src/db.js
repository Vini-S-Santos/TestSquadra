import sqlite3 from "sqlite3";
import { open } from "sqlite";
sqlite3.verbose();

let db;

export const initDB = async () => {
  db = await open({
    filename: "./leads.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS leads (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      firstName TEXT,
      fullName TEXT,
      phone TEXT,
      email TEXT,
      suburb TEXT,
      category TEXT,
      description TEXT,
      price REAL,
      status TEXT DEFAULT 'pending',
      createdAt TEXT
    );
  `);

  return db;
};
export const getDB = () => db;
