import mongoose from 'mongoose';

const workorderSchema = new mongoose.Schema({
    name: { type: String,
        lowercase: true,
        required: 'Name is required'
    },
    startDate: { type: Date },
    finishDate: { type: Date },
    Users: [{type: mongoose.ObjectId}],
}, {timestamps: true});

export default mongoose.model('Workorder', workorderSchema);