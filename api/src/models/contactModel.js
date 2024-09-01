const [DataTypes] = require("sequelize");
const sequelize = require("../config/db");

const Contact = sequelize.define("Contact", {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  company: {
    type: DataTypes.STRING(100),
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER(20),
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Contact;
