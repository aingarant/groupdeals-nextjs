const db = require('../../../../config/db');

export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.send(req.body);
  }

  if (req.method === "GET") {
    const id = req.query.id;
    const query = "SELECT groups.name, members.profile FROM groups JOIN members ON groups.id = members.groupid WHERE groups.id = $1;";
    const values = [id];

    db.query(query, values).then(result => {
      console.log(groupId)
      return res.status(200).json(result.rows);
    })
      .catch(error => {
        return res.status(500).json({ error: error.message });
      })
  }
} 