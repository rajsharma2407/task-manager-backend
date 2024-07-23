const express = require('express');
const router = express.Router();
const Task = require('../models/Task');
const TaskGroup = require('../models/TaskGroup');

// Create a new task
router.post('/', async (req, res) => {
  try {
    const task = new Task(req.body);
    task.column='todo'
    task.createdByUserId="1";
    task.taskGroupId="1";
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/group-id/:taskGroupId', async (req, res) => {
  try {
    const { taskGroupId } = req.params;
    const tasks = await Task.find({ taskGroupId });

    if (!tasks.length) {
      return res.status(404).json({ message: 'No tasks found for this task group' });
    }

    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

// Read a single task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate({ taskId: req.params.id }, req.body, { new: true });
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new task group
router.post('/group', async (req, res) => {
  try {
    const taskGroup = new TaskGroup(req.body);
    await taskGroup.save();
    res.status(201).json(taskGroup);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Read all task groups
router.get('/group', async (req, res) => {
  try {
    const taskGroups = await TaskGroup.find();
    res.json(taskGroups);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
