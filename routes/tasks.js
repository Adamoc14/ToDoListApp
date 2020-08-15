const express = require('../libs_required'),
    router = express.Router(),
    task = require('../DB/task')
    helper = require('../helper_func')

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

router.post("/" , (req,res)=> {
    if(!helper.validateTask(req.body.Task)) return
    const newTask = req.body.Task
    task.create(newTask , (err , newlyCreatedTask) => {
        if(err) console.log(err)
        res.redirect('/')
    })
})

router.get("/new" , (req, res)=> {
    res.render("newTask")
})

router.get("/:id" , (req, res)=> {
    if(!helper.validateId(req.params.id)) return
    task.findById(req.params.id , (err,foundTask) => {
        if (err) console.log(err)
        res.render("singleTask" , {task: foundTask})
    })
})

router.put("/:id" , (req, res) => {
    if(!helper.validateTask(req.body.Task) || !helper.validateId(req.params.id)) return
    const newTask = req.body.Task
    task.findByIdAndUpdate(req.params.id , newTask , (err, newlyUpdatedTask)=> {
        if(err) console.log(err)
        res.redirect("/")
    })
})

router.delete("/:id" , (req, res) => {
    if(!helper.validateId(req.params.id)) return
    task.findByIdAndRemove(req.params.id , (err, newlyDeletedTask) => {
        if(err) console.log(err)
        res.redirect("/")
    })
})

router.get("/:id/edit", (req, res)=> {
    if(!helper.validateId(req.params.id)) return
    task.findById(req.params.id , (err,foundTask) => {
        if (err) console.log(err)
        res.render("singleTaskEdit" , {task: foundTask , helper : helper})
    })
})




module.exports = router;