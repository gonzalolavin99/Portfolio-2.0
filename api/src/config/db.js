const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgresql://portfolio_db_ahm7_user:U4y09kaEmk5K1tUjileiDOVHL9zlVyug@dpg-crfj3elsvqrc73f9qb10-a.oregon-postgres.render.com/portfolio_db_ahm7', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

module.exports = sequelize;