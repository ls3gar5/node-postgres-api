import { Router } from "express";
import { createTask, getTaskById, getTasks, getTasksByProjectId, updateTaskById } from '../controllers/task.controller'
const router = Router();

router.post('/', createTask);
router.get('/:id', getTaskById);
router.get('/', getTasks);
router.get('/projectid/:id', getTasksByProjectId);
router.put('/:id', updateTaskById);

export default router;