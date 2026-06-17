import mongoose from "mongoose";

const ActivitylogSchema = new mongoose.Schema({
    action: {
        type: String,
        required: true,
    },
    tasktitle: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
    },
    
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

let Activitylog: mongoose.Model<any>;
try {
    Activitylog = mongoose.model("Activitylog");
} catch {
    Activitylog = mongoose.model("Activitylog", ActivitylogSchema);
}

export default Activitylog;