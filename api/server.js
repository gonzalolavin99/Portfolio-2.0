require("dotenv").config();
const app = require("./src/app.js");
const sequelize = require('./src/config/db');

const PORT = process.env.PORT || 3000;

sequelize.sync()
  .then(() => {
    console.log('Database ON!');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => console.error('Something went wrong with the Database :(', err));