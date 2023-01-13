const db = require("../../config/db");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, service, group } = req.body;
    console.log(req.body);

    const query1 ="INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
    const values1 = [name, email];

    db.query(query1, values1)
      .then((result1) => {
        const query2 = "SELECT * FROM groups WHERE name = $1";
        const values2 = [`${service} - ${group}`];

        db.query(query2, values2)
          .then((result2) => {
            console.log("*******", values2);
          
            const query3 =
              "INSERT INTO members (userid, groupid, profile) VALUES ($1, $2, $3) RETURNING *";
            const values3 = [result1.rows[0].id, result2.rows[0].id, email];

            db.query(query3, values3)
              .then((result3) => {
                return res.status(200).json(result3.rows);
              })
              .catch((error) => {
                return res.status(500).send("Error 3: " + error.message);
              });
          })
          .catch((error) => {
            return res.status(500).send("Error 2: " + error.message);
          });
      })
      .catch((error) => {
        return res.status(500).send("Error 1: " + error.message);
      });
  }
}
