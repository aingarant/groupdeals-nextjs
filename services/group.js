const db = require("../config/db");

const getGroupById = (id) => {
  const query = "SELECT * FROM groups WHERE id = $1";
  const group = db
    .query(query, [id])
    .then((result) => {
      return result.rows[0];
    }
    )
    .catch((error) => {
      return error.message;
    }
    );
  return group;
}
const getGroups = () => {
  const query = "SELECT * FROM groups";
  const groups = db
    .query(query)
    .then((result) => {
      return result.rows;
    }
    )
    .catch((error) => {
      return error.message;
    }
    );
  return groups;
};

const getCategories = () => {
  const query = "SELECT DISTINCT type FROM services";
  const categories = db
    .query(query)
    .then((result) => {
      return result.rows;
    }
    )
    .catch((error) => {
      return error.message;
    }
    );
  return categories;
};

module.exports = {
  getGroupById,
  getGroups,
  getCategories
}