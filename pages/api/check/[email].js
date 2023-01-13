const db = require("../../../config/db");

export default function handler(req, res) {
  if (req.method === "GET") {
    const email = req.query.email;

    const query =
      "select members.profile, groups.name, groups.id FROM members JOIN groups ON members.groupid = groups.id WHERE members.profile = $1";
    const values = [email];

    db.query(query, values)
      .then((result) => {
        return res.status(200).json(result.rows);
      })
      .catch((error) => {
        return res.status(500).send(error.message);
      });
  }
}
