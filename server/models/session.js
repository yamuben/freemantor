import mongoose from "mongoose";


const SessionSchema = new mongoose.Schema({
    title: String,
    description: String,
    user: {
        type: mongoose.Schema.ObjectId,
        ref:"User"
    },
    mentor: {
        type: mongoose.Schema.ObjectId,
        ref:"User"
    },
    timeToStart: Date,
    timeToEnd: Date,
    status: {
        type: String,
        enum: ["pending", "approve", "decline"],
        default: "pending"
    }
});

SessionSchema.pre(/^find/, function(next){
    this.populate({
        path:"user",
        select:" firstName lastName email phone gender"
    }).populate({
        path:"mentor",
        select:" firstName lastName email phone gender career"

    });

    next();
})

const SessionInfo = mongoose.model('Session', SessionSchema);

export default SessionInfo;