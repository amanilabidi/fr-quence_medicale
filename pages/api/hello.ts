// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import mysql2 from 'mysql2/promise';

const dbconnection = {
  host: "localhost",
    user: "root",
    password: "",
    database: "freq_medicale"
};

const handler = nc<NextApiRequest, NextApiResponse>();

handler.get(async (req, res) => {
  try {
    const connection = await mysql2.createConnection(dbconnection);
    const [rows] = await connection.query('SELECT * FROM accounts ');
    connection.end();
    res.status(200).json(rows);
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default handler;



