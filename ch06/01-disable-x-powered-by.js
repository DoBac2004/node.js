const express = require('express')
const app = express()

app.disable('x-powered-by')
app.get('*', (req,res) => {
    res.send(`open your dev tools and examine your headers;` + `you'll notice there is no x-powered-by headers!`)
})
 const port = process.env.PORT || 3000
 app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`))