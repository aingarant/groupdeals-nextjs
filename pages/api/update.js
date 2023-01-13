const db = require('../../config/db');

export default function handler(req, res) {

  if (req.method === "GET") {

    const query1 = "SELECT * FROM users";
    db.query(query1).then(result => {
      result.rows.map(user => {
        const query2 = "SELECT * FROM groups WHERE name = $1";
        const values = [`YouTube - ${user.email}`]
        db
          .query(query2, values)
          .then(result => {
            const query3 = "UPDATE groups SET adminId = $1 WHERE id = $2";
            const values = [user.id, result.rows[0].id]
            db
              .query(query3, values)
              .then(result => {
                return res.status(200).json(result.rows);
              }
            )
          })
          .catch(error => console.log(error.message));
      })
    }

    )
      .catch(error => console.log(error.message));


    // const email = 'youtube16@udns.ca';
    // const query = "SELECT * FROM groups WHERE name = $1";
    // const values = [`YouTube - ${email}`]

    // db.query(query, values).then(result => {
    //   return res.status(200).json(result.rows);
    // })
    //   .catch(error => {
    //     return res.status(500).json({ error: error.message });
    //   })
  }
} 