const db = require('../../config/db');

export default function handler(req, res) {

  if (req.method === "GET") {

    const query1 = "SELECT * FROM members WHERE profile is null LIMIT 1";
    db.query(query1).then(members => {

      const query2 = "SELECT * FROM users WHERE id = $1";
      const values2 = [members.rows[0].userid]

      db
        .query(query2, values2)
        .then(users => {

          const query3 = "UPDATE members SET profile = $1 WHERE userid = $2";
          const values3 = [users.email, users.id];

          db
            .query(query3, values3)
            .then(result => {
              return res.status(200).json(result.rows);
            }
          )
        }).catch(error => console.log(error.message));
    })
      .catch(error => console.log(error.message));
  }
}