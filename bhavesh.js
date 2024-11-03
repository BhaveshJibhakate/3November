//this is for the sake of demo i am creating this file ok

const express=require('express')
const app=express()
const path=require('path')
const publicpath=path.join(__dirname,'Public')

// app.get("/",(req,res)=>{
//     res.send(`
//         <h1>hellow bhavesh</h1>
//         <input type="text">
//         <button>click me</button>
//         `)
// })
console.log(__dirname); //this will give the root folder path now to access html which is stored in public folder
console.log(publicpath);

app.use(express.static(publicpath))



app.listen(4000)
