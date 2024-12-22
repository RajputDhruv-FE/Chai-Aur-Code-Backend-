require('dotenv').config()
const connectDB = require('./db/indexdb')
const app = require('./app')


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`server is running on http://localhost:${process.env.PORT}`)
    })
    app.on('error',(err)=>{
        console.log("Error in starting the server"+err)
    })
})
.catch(err=>{
    console.log("Error in connecting to DB"+err)
})