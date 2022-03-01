import { Router } from "express";
import { createTask, getTaskById, getTasks, getTasksByProjectId, updateTaskById } from '../controllers/task.controller'
const router = Router();

router.post('/', createTask);
router.get('/:id', getTaskById);
router.get('/', getTasks);
router.get('/project/:projectid', getTasksByProjectId);
router.put('/:id', updateTaskById);

export default router;