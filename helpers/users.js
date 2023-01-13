const db = require('../config/db');


const getUsers = () => {
  const query = "SELECT * FROM users";
  return db.query(query).then(result => {
    return result.rows.json();
  }
  ).catch(error => {
    return error.message;
  }
  )

}

module.exports = {
  getUsers
}