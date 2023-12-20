const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req,res ) =>{
    res.type('text/plain')
    res.send('Meadowlark Travel')
})

app.get('/', (req,res ) =>{
    res.type('text/plain')
    res.send('About Meadowlark Travel')
})

app.get('/', (req,res ) =>{
    res.type('text/plain')
    res.status(404)
    res.send('404 - Not Found ')
})

app.use((err, req, res, next) => {
    console.error(err.message)
    res.type('tect/plain')
    res.status(500)
    res.send('500 -Server Error')
})
 app.listen(port, () => console.log(
    `Express started on http://localhost:${port}` + `perss Ctrl-C to terminate`
 ))