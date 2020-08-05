const express = require('express')
    app = express()
    port = process.env.port || 3000

app.get('/', (req, res)=> {
    res.send("Well done boy , all set to go mup")
})

app.listen(port , ()=> {
    console.log("Your server seems to have started , fair play chief")
})