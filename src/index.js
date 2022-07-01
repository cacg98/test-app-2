const express = require('express')
const app = express()

// middleware
app.use(express.json())

// routes
app.use(require('./routes/index'))

// starting the app
app.listen(3000, () => {
    console.log('app running');
})