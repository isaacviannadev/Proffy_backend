import express from 'express';
import ClassesController from './controlers/ClassesControlers';
import ConnectionController from './controlers/COnnectionsController';

const routes = express.Router();
const classesControlers = new ClassesController();
const connectionsControlers = new ConnectionController();

routes.get('/classes', classesControlers.index);
routes.post('/classes', classesControlers.create);

routes.get('/connections', connectionsControlers.index);
routes.post('/connections', connectionsControlers.create);

export default routes;