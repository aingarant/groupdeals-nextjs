const db = require('../../../config/db');

export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.send(req.body);
  }

  if (req.method === "GET") {
    const groupId = req.query.groupid;
    const query = "SELECT groups.id as groupid, users.email as useremail, services.name as service FROM groups JOIN members ON members.groupid = groups.id JOIN users ON users.id = members.userid JOIN services ON services.id = groups.serviceid WHERE groups.id = $1";
    const values = [groupId];

    db.query(query, values).then(result => {
      console.log(groupId)
      return res.status(200).json(result.rows);
    })
      .catch(error => {
        return res.status(500).json({ error: error.message });
      })
  }
} 