import connectDB from "@/lib/mongodb";
import Activitylog from "@/models/Activitylog";

export async function GET() {
    try {
        await connectDB();
        const logs = await Activitylog.find().sort({timestamp: -1}).limit(20);
        return Response.json(logs);
    } catch(error) {
        console.log(error);
        return Response.json({message: "Failed to fetch logs"}, 
                               {status: 500});
    }
}