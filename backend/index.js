const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())

app.use(cors())

app.post("/api/update",(req,res)=>{
    setTimeout(()=>{
        res.status(200).json(req.body)
    },2000)
})
app.post("/api/createpost", (req, res)=>{
        res.status(200).json(req.body)
})
app.listen(9000,()=>{
    console.log('server is running with port 9000')
})