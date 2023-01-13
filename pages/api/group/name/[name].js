const db = require('../../../../config/db');

export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.send(req.body);
  }

  if (req.method === "GET") {
    const name = req.query.name;
    console.log(name)
    const query = "SELECT groups.name, members.profile, members.userid FROM groups JOIN members ON groups.id = members.groupid WHERE groups.name = $1;";
    const values = [name];

    db.query(query, values).then(result => {
      if (result.rowCount === 0) {
        return res.status(404).json({ error: "Group not found" });
      }
      return res.status(200).json(result.rows);
    })
      .catch(error => {
        return res.status(500).json({ error: error.message });
      })
  }
} 