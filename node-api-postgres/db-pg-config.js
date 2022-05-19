const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'database-uvgente.cwmnc3rkfseg.us-east-1.rds.amazonaws.com',
  database: 'uvgente',
  password: 'masterUVGente',
  port: 5432,
})
module.exports =  pool