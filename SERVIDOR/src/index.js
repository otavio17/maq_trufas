const http =  require("http")
const express = require("express")
const path = require("path")

const app = express()
const  router = express.Router();

const hostname="localhost"
const port = 3333

router.get("/",(req,res)=>{
 res.sendFile(path.join(__dirname+"/pages/home.html"));
})

app.use(router)

app.listen(port, ()=>{
    console.log("SERVIDOR RODANDO"
    )
})