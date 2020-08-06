const express = require('../libs_required')
    router = express.Router()
    task = require('../DB/task')
    indexedDB = require('../DB/index')

const seedDB = () => {
    const newTasks = 
    [
        {
            title: "Eat a sandwich",
            priority: 5,
            description: "I'm hungry"
        },
        {
            title: "Update my phone",
            priority: 4,
            description: "It pissing me off"
        },
        {
            title: "Text Eoin about meeting up",
            priority: 2,
            description: "Getting bored in the gaff"
        },
    ]
    newTasks.map(newTask => task.create(newTask , (err, newlyCreatedTask) => {
        if(err) console.log(err)
        console.log("Seeded the DB , have a look chief")
    }))
}

router.get("/", (req, res)=> {
    // seedDB()
    res.send("Well done boy , all set to go mup")
})

module.exports = router;