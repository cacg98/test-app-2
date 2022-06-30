const expres = require('express')
const app = expres()

app.get('/', (req, res) => {
    res.send('it works')
})

app.listen(3000, () => {
    console.log('app running');
})