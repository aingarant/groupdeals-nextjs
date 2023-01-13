const db = require('../../../config/db');

export default function handler(req, res) {
  if (req.method === "GET") {
    const userId = req.query.id;
    const query = "SELECT users.id as user_id, users.name as user_name, users.username as user_profile, users.email user_email, groups.name as group_name FROM users JOIN members ON members.userid = users.id JOIN groups ON groups.id = members.groupid WHERE users.id = $1";
    const values = [userId];

    db.query(query, values).then(result => {
      return res.status(200).json(result.rows);
    })
      .catch(error => {
        return res.status(500).send(error.message);
      })
  }
} 