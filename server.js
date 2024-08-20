const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
// console.log(process.env);
const DB = process.env.DATABASE.replace(
  '<password>',
  process.env.DATABASE_PASSWORD,
);
// console.log(DB);
if (!DB) {
  console.error('DATABASE environment variable is not set.');
  process.exit(1);
}

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB is successfully connected'));

const port = 3000;
app.listen(port, () => {
  console.log(`Listening on the port ${port}.`);
});
