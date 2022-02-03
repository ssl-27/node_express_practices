const express = require('express')
const router = express.Router()
const {getAllTasks, createNewTasks,getTask, updateTasks, deleteTasks} = require('../controller/tasks')

router.route('/').get(getAllTasks).post(createNewTasks)
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks)


module.exports = router