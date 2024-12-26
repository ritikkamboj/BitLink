import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    url: { type: String, required: true },
    shorturl: { type: String, required: true, unique: true }, // Add unique constraint
});

const Url = mongoose.models.Url || mongoose.model('Url', urlSchema); // Prevents model re-registration

export default Url;