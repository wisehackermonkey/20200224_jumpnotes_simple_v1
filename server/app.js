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
import express from "express"


//express.js setup (web server)
// https://expressjs.com/en/starter/hello-world.html
const app = express()
const PORT = 3000






app.get("/v1/note/:data",(req,res)=>{
    res.send("Works");
})


app.listen(PORT,()=>{
    console.log("Jump Notes Server has started")
    console.log(`Url: http://localhost:${PORT}`)
})



