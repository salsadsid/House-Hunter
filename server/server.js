const app = require('./app');
const port = process.env.PORT || 8080;
const connectToDB = require('./utils/database');

connectToDB();


app.listen(port, () => {
    console.log(`House Hunter app is running on port ${port}`);
});
  