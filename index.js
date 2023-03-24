const express = require('express')

const app = express()

app.use(express.static('public'));

const port = process.env.PORT || 3000

app.get('/', (req, res)=> {
    res.render(`index.html`)
})
app.get('/about', (req, res)=> {
    res.send(`Hello from about page`)
})
app.get('/message', (req, res)=> {
    res.send(`you can text me`)
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})