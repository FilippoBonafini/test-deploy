const Task = require('../models/task')

// RESTITUISCE TUTTE LE TASK 
exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({}, 'id text data');
        const responseData = { data: tasks };
        res.json(responseData);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle tasks' });
    }
};
//-----------------------------------------------------------------------

//   RESTITUISCE TUTTE LE TASK INCOMPLETE 
exports.getAllIncompleteTasks = async (req, res) => {
    try {
        const incompleteTasks = await Task.find({ 'data.complete': false });
        const responseData = { data: incompleteTasks };
        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle tasks incomplete' });
    }
};
//-----------------------------------------------------------------------

//   RESTITUISCE TUTTE LE TASK COMPLETE 
exports.getAllCompleteTasks = async (req, res) => {
    try {
        const incompleteTasks = await Task.find({ 'data.complete': true });
        const responseData = { data: incompleteTasks };
        res.status(200).json(responseData);
    } catch (error) {
        res.status(500).json({ error: 'Errore nel recupero delle tasks incomplete' });
    }
};
//-----------------------------------------------------------------------

//   AGGIUNGE UNA TASK
exports.addTask = async (req, res) => {
    const taskData = req.body;
    try {
        const task = new Task(taskData);
        await task.save();
        res.status(200).json({ success: true, data: task });
    } catch (error) {
        console.log(error)
        res.status(400).json({ success: false, error: 'Errore nell\'aggiunta della task' });
    }
}
//-----------------------------------------------------------------------

//   MODIFICA UNA TASK
exports.editTask = async (req, res) => {
    const { id } = req.params; 
    const updatedTaskData = req.body;

    try {
        // Utilizza il metodo `findByIdAndUpdate` di Mongoose per cercare la task per ID e aggiornarla
        const updatedTask = await Task.findByIdAndUpdate(id, updatedTaskData, { new: true });

        if (updatedTask) {
            res.status(200).json({ success: true, data: updatedTask });
        } else {
            res.status(404).json({ error: 'Task non trovata' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'aggiornamento della task' });
    }
};

//-----------------------------------------------------------------------

//   ELIMINA UNA TASK
exports.deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete( id );
        res.status(200).json({ success: true });
    } catch (error) {
        res.status(500).json({ error: 'Errore nell\'eliminazione della task' });
    }
}
//-----------------------------------------------------------------------

