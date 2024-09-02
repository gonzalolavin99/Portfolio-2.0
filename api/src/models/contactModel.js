// Importing the DataTypes module from Sequelize, which provides different data types for defining model attributes
const { DataTypes } = require("sequelize");

// Importing the sequelize instance that was configured in the "../config/db" file
const sequelize = require("../config/db");

// Defining a Sequelize model named "Contact"
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
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  message: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Contact;
