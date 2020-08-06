mongoose.connect('mongodb+srv://adamoc:gaelicfootball@todolistapp.6wfuh.mongodb.net/ToDoListApp?retryWrites=true&w=majority', {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("DB connected successfully")
}).catch((err)=>{
    console.log(err)
})

module.exports = mongoose
