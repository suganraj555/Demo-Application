const express = require('express');
const app = express();
const mongoose = require('mongoose');


const expenseDB = require('./ecom');

mongoose.connect('mongodb+srv://sugan:suganraj_123@cluster0.f5lwzb3.mongodb.net/Devil?retryWrites=true&w=majority');
app.use(express.json());
app.get('/ecoms/:id',async (req, res) =>{
    try{
        const id=req.params.id;
        const result=await expenseDB.findById(id);
        if(result)
           res.send(result);
        else 
           res.send("no");
    }
    catch(err){
        res.send(err);
    }
});

app.get('/ecoms',async (req, res) =>{
    try{
        const result=await expenseDB.find();
        if(result)
           res.send(result);
        else 
           res.send("no");
    }
    catch(err){
        res.send(err);
    }
});


app.post('/ecoms',async(req, res) =>{
    console.log(req.body)
    const newexpress=req.body;
    await expenseDB.create(newexpress);
    res.send("<h1>created</h1>");
})
const port =process.env.PORT ||8000
app.listen(port)
    console.log( `Example app listening on port ${port} `);

