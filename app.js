const express = require('express');
const bodyParser =require('body-parser');

const app = express();


app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("task manager API");
});

app.listen(3000);

let tasks=[];


app.get('/tasks',(req,res)=>{
    res.json(tasks);


});

app.post('/tasks',(req,res)=>{
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/tasks/:id',(req,res)=>{
    const taskId = req.params.id;
    const task = tasks.find(task=>task.id===taskId);
if(!task){
    return res.status(404).json({error:'task not found'});

}
res.json(task);
});

app.put('/tasks/:id',(req,res)=>{
    const taskId= req.params.id;
    const updatedTask =req.body;
    tasks = tasks.map(task=>(task.id===taskId?updatedTask:task));
    
});

app.delete('/tasks/:id',(req,res)=>{
    const taskId =req.params.id;
    tasks = tasks.filter(task=>task.id!==taskId);
    res.json({message:'task deleted'});
});




