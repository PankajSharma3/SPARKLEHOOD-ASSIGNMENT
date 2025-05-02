import Incident from '../models/incident.model.js';

export const getAllIncidents = async (req, res) => {
    try {
        const incidents = await Incident.find().sort({ reported_at: -1 });
        res.json(incidents);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


export const createIncident = async (req, res) => {
    try {
        const { title, description, severity } = req.body;

        if (!title || !description || !severity) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const newIncident = new Incident({
            title,
            description,
            severity
        });

        const savedIncident = await newIncident.save();
        res.status(201).json(savedIncident);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const getIncident = async (req, res) => {
    try {
        const incident = await Incident.findById(req.params.id);

        if (!incident) {
            return res.status(404).json({ error: 'Incident not found' });
        }

        res.json(incident);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};


export const deleteIncident = async (req, res) => {
    try {
        const incident = await Incident.findByIdAndDelete(req.params.id);

        if (!incident) {
            return res.status(404).json({ error: 'Incident not found' });
        }

        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};