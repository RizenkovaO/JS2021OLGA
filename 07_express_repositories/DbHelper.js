const mysql = require("mysql2");

// const connection = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'postgres',
//   password: 'mysecretpassword',
//   port: 5432,
// })


// connection.connect(err => {
//   if (err) {
//     console.error('connection error', err.stack)
//   } else {
//     console.log('connected')
//   }
// })

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "test_db",
  port:3306,
  waitForConnections: true,
  connectionLimit: 10,
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  let students = connection.query("select * from students");
  console.log(students)
});


// module.exports = connection

//docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=test_db -p 3306:3306 -d mysql:tag