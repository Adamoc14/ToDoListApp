// App variable and function Definitions
const express = require('./libs_required'),
    app = express(),
    port = process.env.Port || 3000,
    // indexRoute = require('./routes/index'),
    todoRoutes = require('./routes/tasks');

// App Configurations
require('dotenv').config()
app.use(express.static(`${__dirname}/resources`));
app.use(methodOverride("_method"))
app.use(bodyParser.urlencoded({extended: true}))
app.set("views" , `${__dirname}/views`)
app.set("view engine", "ejs")

//Routes
// app.use("/" , indexRoute)
console.log("well")
app.use("/" , todoRoutes)


app.listen(port , () => {
    console.log(`Your server seems to have started on port ${port}${process.env.Port} , fair play chief`)
})