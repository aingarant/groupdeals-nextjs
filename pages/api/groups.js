const db = require('../../config/db');

export default function handler(req, res) {
  if (req.method === 'POST') {
    return res.send(req.body);
  }

  if (req.method === "GET") {
    const query = "SELECT * FROM groups";

    db.query(query).then(result => {
      return res.status(200).json(result.rows);
    })
      .catch(error => {
        return res.status(500).json({ error: error.message });
      })
  }
} 