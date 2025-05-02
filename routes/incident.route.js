import express from 'express';
import { getAllIncidents,createIncident,getIncident,deleteIncident } from "../controllers/incident.controller.js";

const Router = express.Router();

Router.get('/', getAllIncidents);
Router.post('/', createIncident);
Router.get('/:id', getIncident);
Router.delete('/:id', deleteIncident);

export default Router;