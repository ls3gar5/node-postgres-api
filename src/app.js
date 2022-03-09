import express, {json} from 'express';
import morgan from 'morgan';
import '@babel/polyfill';
import { createRoles } from '../src/libs/initialSetup'

//importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';
import baseRoutes from './routes/bases';
import products from './routes/products';
import auth from './routes/auth'

import './database/mongoDbDataBase';
//initilizations
const app = express();
//createRoles();

//midleware de express
app.use(morgan('combined'));
//interpretar los request con datos json
app.use(json());

//routes
app.use('/api', baseRoutes);
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);


app.use('/api/products',products);
app.use('/api/auth',auth);

export default app;

