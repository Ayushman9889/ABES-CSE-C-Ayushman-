const express = require('express');
const app = express();
const port = 8080;

app.get('/',(req,res)=>{
    res.send("Hello this is the backend server");
})
app.get('/about',(req,res)=>{
    res.send("Hello this is the about server");
})
app.get('/contact',(req,res)=>{
    res.send("Hello this is the contact server");
})

app.get('/details',(req,res)=>{
    const details = [
        {
            id: 1,
            name: "hippo",
            class: 3
        },
        {
            id: 2,
            name: "tippu",
            class: 4
        },
        {
            id: 1,
            name: "jippo",
            class: 5
        },
        {
            id: 1,
            name: "sippo",
            class: 6
        },
        {
            id: 1,
            name: "dippo",
            class: 7
        },
    ]
    res.send(details);
})

app.listen(port,()=>{
    console.log("Server is listening on :http://localhost:" + port);
})