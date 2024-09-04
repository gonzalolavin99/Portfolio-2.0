const sequelize = require('./src/config/db');

module.exports = async () => {
  await sequelize.close();
};