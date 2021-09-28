import sqlite3 from 'sqlite3'
import path from 'path';

const db_name = path.join(__dirname, 'Chinook_Sqlite_AutoIncrementPKs.sqlite')

console.log('test ==> ',db_name)

const db = new sqlite3.Database(db_name, err => {
  if (err) {
    console.log(db_name);
    return console.error(err.message);
  }
  console.log("Successful connection to the database")
})

export default db