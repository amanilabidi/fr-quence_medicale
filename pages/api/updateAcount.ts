import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import mysql2 from "mysql2/promise";
const dbconnection = {
  host: "localhost",
  user: "root",
  password: "",
  database: "freq_medicale",
};

const updateAcount = nc<NextApiRequest, NextApiResponse>();

updateAcount.put(async (req, res) => {
  const {
   id,
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
    "UPDATE accounts SET nom = ?, prenom = ?, civilite = ?, sexe = ?, specialite = ?, mode_exercice = ?, annee_exercice = ?, pays = ?, code_postale = ?, rpps = ?, pseudo = ?, email = ?, password = ? WHERE id = ?";
    const values = [
      id,
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
    await connection.execute(query, [...values, id]);
    connection.end();
    const acount = {
      id : id,
      nom : nom,
    prenom : prenom ,
    civilite : civilite,
    sexe :sexe  ,
    specialite: specialite,
    mode_exercice :mode_exercice ,
    annee_exercice:annee_exercice ,
    pays : pays,
    code_postale :code_postale ,
    rpps : rpps,
    pseudo : pseudo,
    email : email,
    password : password,
    }
    res.status(200).json({ message: "Account updated successfully" });
  } catch (error) {
    console.error("Error updating account:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
export default updateAcount;
