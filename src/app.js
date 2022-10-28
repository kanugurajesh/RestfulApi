const express = require('express');

require('./db/conn');
const Student = require("./models/students");

const app = express();

app.use(express.json());
// const port = process.env.PORT || 8000;
const port = 8000;

app.get("/",(req,res)=>{
    res.send("hello from the other sides.");
});

app.post("/students",async (req,res)=>{
    console.log(req.body);
    const user = new Student(req.body);
    // user.save().then(()=>{
    //     res.send(user);
    // }).catch((e)=>{
    //     res.send(e);
    // });
    await user.save().then(() => {
        res.send(user)
    }).catch((err) => {
        res.send(err)  
    });;
    res.send("hello from other sides.");
});

app.listen(port,() => {
    console.log(`listening to the port ${port}`);
});