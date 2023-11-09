const express = require("express");
const router = express.Router();

//-----------------------------TASKS-------------------------------------
const taskController = require('../controllers/taskController')

router.get('/tasks',taskController.getAllTasks)
router.get('/tasks/incomplete',taskController.getAllIncompleteTasks)
router.get('/tasks/complete',taskController.getAllCompleteTasks)
router.post('/tasks/add',taskController.addTask)
router.put('/tasks/:id',taskController.editTask)
router.delete('/tasks/:id',taskController.deleteTask)
//-----------------------------------------------------------------------





module.exports = router;