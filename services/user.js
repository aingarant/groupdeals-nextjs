const db = require("../config/db");

const getUsers = () => {
  const query = "SELECT * FROM users";
  const users = db
    .query(query)
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      return error.message;
    });
  return users;
};

const getUserById = (id) => {
  const query = "SELECT * FROM users WHERE id = $1";
  const user = db.query(query, [id]).then((result) => {
    return result.rows[0];
  });
  return user;
};

module.exports = {
  getUsers,
  getUserById
};