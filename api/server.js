require("dotenv").config();
const cors = require('cors');

const app = require("./index.js");
app.use(cors());


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
