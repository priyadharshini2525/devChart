import connectDB from "@/lib/mongodb";
import Task from "@/models/Tasks";
import Activitylog from "@/models/Activitylog";

export async function PATCH(request : Request, {params} : {params: Promise< {id: string}>}) {
    try{
        await connectDB();
        const {id} = await params;
        const body = await request.json();
        const status = body.status;

        const existingtask = await Task.findById(id);
        const oldstatus = existingtask.status;


        const updatedtask = await Task.findByIdAndUpdate(id, { $set: {status}}, {new : true})

        await Activitylog.create({
            action:"status_changed",
            tasktitle: updatedtask.title,
            detail: `${oldstatus} -> ${status}`
        });
        return Response.json(updatedtask,{status: 200});
    }
    
    catch(error){
        console.log(error);
        return Response.json(
            {message : "failed to update task"},
            {status: 500}
        );

    }
}
export async function DELETE(request : Request, {params} : {params: Promise< {id: string}>}) {
    try{
        await connectDB();
        const {id} = await params;

        const task = await Task.findById(id);
        const deletedtask = await Task.findByIdAndDelete(id);

        await Activitylog.create({
            action:"deleted",
            tasktitle: task.title,
        });

        return Response.json(deletedtask,{status: 200});
    }
    
    catch(error){
        console.log(error);
        return Response.json(
            {message : "failed to delete task"},
            {status: 500}
        );

    }
}