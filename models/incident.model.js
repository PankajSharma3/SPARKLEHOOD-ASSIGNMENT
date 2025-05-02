import mongoose from "mongoose";

const IncidentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    severity: {
        type: String,
        required: true,
        enum: ['Low', 'Medium', 'High']
    },
    reported_at: {
        type: Date,
        default: Date.now
    }
});

const Incident = mongoose.model('Incident', IncidentSchema);

export default Incident;