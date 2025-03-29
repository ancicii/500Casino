import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.use(cors({
  origin: 'http://localhost:8080'
}));
app.use(express.json());

connectDB();

const todoSchema = new mongoose.Schema({
  description: {type: String, required: true},
  completed: {type: Boolean, default: false},
})

const Todo = mongoose.model('Todo', todoSchema);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/allTodos", (req, res) => {
  Todo.find()
    .then((allTodos) => res.status(200).json(allTodos))
    .catch((err)=> res.status(400).json({ error: err.message }))
});

app.post("/addTodo", (req, res) => {
  const newTodo = new Todo({
    description: req.body.description,
    completed: req.body.completed || false,
  });

  newTodo.save()
    .then((todo) => res.status(200).json(todo))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.post("/checkTodo/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;

  Todo.findByIdAndUpdate(id, {completed})
    .then((updatedTodo) => res.status(200).json(updatedTodo))
    .catch((err) => res.status(400).json({ error: err.message }));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
