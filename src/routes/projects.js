import { Router } from "express";
const router = Router();
import {createProject, getProjects, getProjectById} from '../controllers/projects.controller'

router
    .post('/', createProject)

router
    .get('/', getProjects);

router
    .get('/:id', getProjectById);

export default router;