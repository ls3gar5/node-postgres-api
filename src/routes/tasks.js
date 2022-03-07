import { Router } from "express";
import { createTask, getTaskById, getTasks, getTasksByProjectId, updateTaskById } from '../controllers/task.controller'
const router = Router();

router.get('/:id', getTaskById);
router.put('/:id', updateTaskById);

router.post('/', createTask);
router.get('/', getTasks);
router.get('/project/:projectid', getTasksByProjectId);


export default router;