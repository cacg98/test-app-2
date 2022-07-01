const {Pool} = require('pg')

const pool = new Pool({
    host: 'localhost',
    port: '8080',
    user: 'user',
    password: 'password',
    database: 'db-test'
})

const getTask = async (req, res) => {
    const client = await pool.connect()
    const response = await client.query('SELECT * FROM tasks')
        
    res.json(response.rows)
}

module.exports = {
    getTask
}
