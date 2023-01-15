const db = require("../config/db");

const getMembersByGroupId = (id) => {
  const query = "SELECT * FROM members WHERE groupId = $1";
  const members = db
    .query(query, [id])
    .then((result) => {
      return result.rows;
    }
    )
    .catch((error) => {
      return error.message;
    }
    );
  return members;
}

module.exports = {
  getMembersByGroupId
}