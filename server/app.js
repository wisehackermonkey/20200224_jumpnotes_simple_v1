//jump notes main server 
//manages saving notes
//by oran c wisehacker monkey
//20200224

/*
web page with text box
button save
api endpoint
save to json function
dockerize
host
*/
//3d party libraries
import express from "express"
//https://expressjs.com/en/starter/hello-world.html

import low from "lowdb"
//https://github.com/typicode/lowdb

import FileSync from "lowdb/adapters/FileSync"


//custom scripts
import {initalizeDatabase} from "./helpers"

//express.js setup (web server)
// https://expressjs.com/en/starter/hello-world.html
const app = express()
const PORT = 3000



//lowdb simple json database setup
const adapter = new FileSync('db.json')
const db = low(adapter)




initalizeDatabase(db)

app.get("/v1/note/save/:data",(req,res)=>{
    let note_data = req.params.data
    //save note to json database
    db.get("notes")
      .push({text: note_data,time:Date.now()})
      .write()

    res.send("Note has been saved to database");
})


app.listen(PORT,()=>{
    console.log("Jump Notes Server has started")
    console.log(`Url: http://localhost:${PORT}`)
})



