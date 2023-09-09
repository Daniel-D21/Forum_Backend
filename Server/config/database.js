const mysql = require("mysql2");
// const pool = mysql.createPool({
// 	host: process.env.DB_HOST,
// 	user: process.env.DB_USER,
// 	password: process.env.DB_PASSWORD,
// 	database: process.env.DB_NAME,
// 	connectionLimit: 12,
// });

const pool = mysql.createConnection(process.env.DATABASE_URL);
let registration = `
CREATE TABLE IF NOT EXISTS registration (
  user_id INT AUTO_INCREMENT,
  user_name VARCHAR(255) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  user_password VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_id)
  )`;

let profile = `
CREATE TABLE IF NOT EXISTS profile (
  user_profile_id INT AUTO_INCREMENT,
  user_id INT NOT NULL,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  PRIMARY KEY (user_profile_id)
 )`;

let question = `
CREATE TABLE IF NOT EXISTS question (
  question_id INT AUTO_INCREMENT,
  question VARCHAR(255) NOT NULL,
  question_description VARCHAR(255),
  question_code_block VARCHAR(255),
  tags VARCHAR(255),
   user_id INT NOT NULL,
  PRIMARY KEY (question_id)
  )`;

let answer = `
CREATE TABLE IF NOT EXISTS answer (
  answer_id INT AUTO_INCREMENT,
  answer VARCHAR(255) NOT NULL,
  answer_code_block VARCHAR(255),
  user_id INT NOT NULL,
  question_id INT NOT NULL,
  PRIMARY KEY (answer_id)
  )`;
pool.query(registration, (err, results) => {
	if (err) throw err;
	console.log("registration table created");
});
pool.query(profile, (err, results) => {
	if (err) throw err;
	console.log("profile table created");
});
pool.query(question, (err, results) => {
	if (err) throw err;
	console.log("question table created");
});
pool.query(answer, (err, results) => {
	if (err) throw err;
	console.log("answer table created");
});
module.exports = pool;
