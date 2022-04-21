const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const cors = require('cors')
const { use } = require('express/lib/application')
app.get('/',(req , res)=>{
    res.send('hi i am nabil,lala,,kulu')
})
app.use(express.json());
app.use(cors())
const users = [
    {id:1 , name:'rana',gmail:'kalakalu@gmail.com',age:20},
    {id:2 , name:'rana',gmail:'kalakalu@gmail.com',age:20},
    {id:3 , name:'rana',gmail:'kalakalu@gmail.com',age:20},
    {id:4 , name:'rana',gmail:'kalakalu@gmail.com',age:20},
    {id:5 , name:'rana',gmail:'kalakalu@gmail.com',age:20}
]
app.get('/users' , (req , res)=>{
    res.send(users)
})
app.post('/user',(req , res)=>{
    res.send('success')
    console.log(req.body)
})
app.get('/user/:id', (req,res)=>{
    const id = req.params.id
    const user = users.find(u => u.id == id)
    res.send(user)
})
app.listen(port,()=>{
    console.log('ok')
})