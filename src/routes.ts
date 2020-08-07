import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const conectionsController = new ConectionsController();


routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', conectionsController.create);
routes.get('/connections', conectionsController.index);


export default routes;