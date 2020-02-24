//jump notes main server 
//manages saving notes
//by oran c wisehacker monkey
//20200224

/*
x web page with text box
x api endpoint
x save to json function
-dockerize
- host
- finish form setup [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms]
- button save

*/
import path from "path"
//3d party libraries
import express from "express"
//https://expressjs.com/en/starter/hello-world.html
import { body, validationResult } from "express-validator/check"
import { sanitizeBody } from "express-validator/filter"

import low from "lowdb"
//https://github.com/typicode/lowdb

import FileSync from "lowdb/adapters/FileSync"


//custom scripts
import {initalizeDatabase} from "./helpers"

//express.js setup (web server)
// https://expressjs.com/en/starter/hello-world.html
const app = express()
const PORT = 3000
const INDEX_PATH = "/../web/index.html"



//lowdb simple json database setup
const adapter = new FileSync('db.json')
const db = low(adapter)


initalizeDatabase(db)



app.post("/v1/note/save/:data",(req,res)=>{
    let note_data = req.params.data
    DabaseSaveNote(db,note_data)
    res.send("Note has been saved to database");
})

app.use(express.static('web'))


// //display the main page
// app.get("/",(req,res)=>{
//     let index_path = "C:/Users/oranm/github/20200224_jumpnotes_simple_v1/web/index.html"
//     res.sendFile(express.static('web')) //("Please use post version of the endpoint instead of get, thanks.");
// })
app.get("/v1/note/save/:data",(req,res)=>{
    res.send("Please use post version of the endpoint instead of get, thanks.");
})
app.listen(PORT,()=>{
    console.log("Jump Notes Server has started")
    console.log(`Url: http://localhost:${PORT}`)
})



