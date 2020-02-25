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
x finish form setup [https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/forms]
- button save

*/
import path from "path"
//3d party libraries
import express from "express"
//https://expressjs.com/en/starter/hello-world.html
import { check, validationResult } from "express-validator"

import low from "lowdb"
//https://github.com/typicode/lowdb

import FileSync from "lowdb/adapters/FileSync"


//custom scripts
import {initalizeDatabase, DabaseSaveNote} from "./helpers"

//express.js setup (web server)
// https://expressjs.com/en/starter/hello-world.html
const app = express()
const PORT = 3000
const INDEX_PATH = "/../web/index.html"



//lowdb simple json database setup
const adapter = new FileSync('db.json')
const db = low(adapter)


initalizeDatabase(db)


app.use(express.urlencoded())

app.use(express.static('web'))



app.post("/v1/note/save/", [
    // username must be an  email
    check('data').isString().isLength({ min: 1 }).trim().escape()
  ],
  (req,res)=>{

    const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

    let note_data = req.body.data

    DabaseSaveNote(db,note_data)

    let result_message = "Note has been saved to database:" +JSON.stringify(req.body)
    console.log(result_message)
    res.send(result_message);
})



app.listen(PORT,()=>{
    console.log("Jump Notes Server has started")
    console.log(`Url: http://localhost:${PORT}`)
})



