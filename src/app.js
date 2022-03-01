import express, {json} from 'express';
import morgan from 'morgan';
import '@babel/polyfill';

//importing routes
import projectRoutes from './routes/projects';
import taskRoutes from './routes/tasks';

//initilizations
const app = express();

//midleware
app.use(morgan('combined'));
app.use(json());

//routes
app.use('/api/projects',projectRoutes);
app.use('/api/tasks',taskRoutes);

export default app;

