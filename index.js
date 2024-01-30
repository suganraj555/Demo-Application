const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;

const expenseDB = require('./models/expense');

mongoose.connect('mongodb+srv://sugan:suganraj_123@cluster0.f5lwzb3.mongodb.net/?retryWrites=true&w=majority');
app.use(express.json());
app.get('/expenses',async (req, res) =>{
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

app.post('/expenses',async(req, res) =>{
    console.log(req.body)
    const newexpress=req.body;
    await expenseDB.create(newexpress);
    res.send("<h1>created</h1>");
})
app.put('/expenses',async(req,res)=>{
   // const id=req.params.id;
    const query = { title: 'gun' };
    //const update=req.body;
    const updated = await expenseDB.findOneAndUpdate(query, { title: 'jason bourne' }, {new:true});
res.send(updated);
})

app.listen(port, () => {
    console.log( `Example app listening on port ${port} `);
})
