const express = require('../libs_required')
    router = express.Router()
    task = require('../DB/task')
/**
 * This router is mounted at https://localhost:3000/task , so every route after this is prepended with
 * /todo and then something else / === "/task" , /:id === "/task/:id" , etc...
 */
router.get("/", (req, res)=> {
    task.find({}, (err , allTasks) => {
        if(err) console.log(err)
        res.render("all" , {tasks : allTasks })
    })
})

router.get("/new" , (req, res)=> {
    res.render("newTask")
})

module.exports = router;