const express = require('express');
const bodyParser = require('body-parser'); // Corrected 'bosy-parser' to 'body-parser'

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("task manager API");
});

let tasks = [];
let taskIdCounter = 1; // Counter for generating task IDs

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = { ...req.body, id: taskIdCounter++ }; 
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.get('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id); // Parse the ID as an integer
    const task = tasks.find(task => task.id === taskId);
    if (!task) {
        return res.status(404).json({ error: 'task not found' });
    }
    res.json(task);
});

app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    const updatedTask = req.body;
    tasks = tasks.map(task => (task.id === taskId ? { ...task, ...updatedTask } : task));
    res.json({ message: 'task updated' });
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id);
    tasks = tasks.filter(task => task.id !== taskId);
    res.json({ message: 'task deleted' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
