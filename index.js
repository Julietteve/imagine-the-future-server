require('dotenv').config()
const  app  = require("./server")
const { PORT } = require("./src/config/globals")

app.listen( PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})
app.on( "error" , err => console.log(`Err :  ${err}`))