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

const AddContact = nc<NextApiRequest, NextApiResponse>();

AddContact.post(async (req, res) => {
    

    try {
        const {
            nom,
            email,
            message
        } = req.body;
        const connection = await mysql2.createConnection(dbconnection);
        const query =
            "INSERT INTO contact (nom,email,message) VALUES (?, ?, ?)";
        const values = [
            nom,
            email,
            message
        ];
        await connection.query(query, values);
        connection.end();
        res.status(200).json({ message: "Problem added successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


export default AddContact;


