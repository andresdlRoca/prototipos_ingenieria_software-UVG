const Pool = require('pg').Pool
const pool = new Pool({
  user: 'uvgenio',
  host: 'uvgente-aws-instance.cfjhjdssqmiy.us-east-1.rds.amazonaws.com',
  database: 'uvgente',
  password: 'masterUVGente21',
  port: 5432,
})
const pool_test = new Pool({
  user: 'uvgenio',
  host: 'uvgente-aws-instance.cfjhjdssqmiy.us-east-1.rds.amazonaws.com',
  database: 'uvgente_test',
  password: 'masterUVGente21',
  port: 5432,
})
module.exports =  { pool, pool_test}