// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import mysql2 from "mysql2/promise";
/* POST  account*/ 
const dbconnection = {
  host: "localhost",
  user: "root",
  password: "",
  database: "freq_medicale",
};

const CreatenewAccount = nc<NextApiRequest, NextApiResponse>();

CreatenewAccount.post(async (req, res) => {
  const {
    nom,
    prenom,
    civilite,
    sexe,
    specialite,
    mode_exercice,
    annee_exercice,
    pays,
    code_postale,
    rpps,
    pseudo,
    email,
    password,
  } = req.body;

  try {
    const connection = await mysql2.createConnection(dbconnection);
    const query =
      "INSERT INTO accounts (nom, prenom, civilite, sexe, specialite, mode_exercice, annee_exercice, pays, code_postale, rpps, pseudo, email, password) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    const values = [
        nom,
        prenom,
        civilite,
        sexe,
        specialite,
        mode_exercice,
        annee_exercice,
        pays,
        code_postale,
        rpps,
        pseudo,
        email,
        password,
    ];
    await connection.query(query, values);
    connection.end();
    res.status(200).json({ message: "Account created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default CreatenewAccount;


