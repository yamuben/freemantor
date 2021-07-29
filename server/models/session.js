import mongoose from "mongoose";


const SessionSchema = new mongoose.Schema({
    title: String,
    description: String,
    user: String,
    mentor: String,
    timeToStart: Date,
    timeToEnd: Date,
    status: {
        type: String,
        enum: ["appending", "approve", "decline"],
        default: "pending"
    }
});

const SessionInfo = mongoose.model('Session', SessionSchema);

export default SessionInfo;