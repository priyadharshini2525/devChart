"use client";

import Navbar from "@/components/Navbar"
import TaskCard from "@/components/TaskCard";
import React,{ useState, useEffect } from "react";

type Task = {
  _id: string;
  title: string;
  description: string;
  priority: string;
  status: string;
};

type Log = {
  _id: string;
  action: string;
  tasktitle: string;
  detail?: string;
  timestamp: string;
};

export default function Home(){

    const [tasks,setTasks] = useState<Task[]>([]);
    const [searchterm, setsearchterm]= useState<string>("");
    const [logs, setLogs] = useState<Log[]>([]);

    const totalTasks = tasks.length;

    const doneTasks = tasks.filter(
      (task) => task.status === "done"
    ).length;

    const remainingTasks = totalTasks - doneTasks;

    const completionRate =
      totalTasks > 0
        ? Math.round((doneTasks / totalTasks) * 100)
        : 0;

    async function fetchTasks() {

      const response = await fetch("/api/tasks");
      const data = await response.json();
      setTasks(data);
    }

    async function fetchLogs() {
    const response = await fetch("/api/activitylogs");
    const data = await response.json();
    setLogs(Array.isArray(data) ? data : []);
  }

    async function refreshAll() {
    await fetchTasks();
    await fetchLogs();
    }

    useEffect(() => {
      fetchTasks();
      fetchLogs();
    }, []);


    return (
      <>
        <Navbar />
        <div className="m-4 p-5 bg-gray-100 rounded-xl shadow">

          <div className="flex justify-around mb-4">

            <div className="text-center">
              <p className="text-gray-500">Total Tasks</p>
              <h2 className="text-3xl font-bold">
                {totalTasks}
              </h2>
            </div>

            <div className="text-center">
              <p className="text-gray-500">Done Tasks</p>
              <h2 className="text-3xl font-bold text-green-600">
                {doneTasks}
              </h2>
            </div>

            <div className="text-center">
              <p className="text-gray-500">Remaining Tasks</p>
              <h2 className="text-3xl font-bold text-red-500">
                {remainingTasks}
              </h2>
            </div>

          </div>

          <div>
            <p className="mb-2 font-semibold">
              Completion Progress: {completionRate}%
            </p>

            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-green-500 h-4 rounded-full transition-all duration-500"
                style={{ width: `${completionRate}%` }}
              ></div>
            </div>

          </div>

        </div>
        <input
          placeholder ="SEARCH TASK HERE"
          value ={searchterm}
          onChange={(e) => setsearchterm(e.target.value)}/>
        <div className="flex gap-4 m-3">
          <div className="flex-1 flex gap-4">
            <div className = "flex-1 flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
              <h1>To-Do</h1>
              {tasks.filter((task)=>task.status == "todo" && task.title.toLowerCase().includes(searchterm.toLowerCase()) ).map((task)=>(
                <TaskCard 
                  key={task._id}
                  title={task.title}
                  description={task.description}
                  priority={task.priority}
                  status={task.status}
                  _id = {task._id}
                  fetchTasks = {refreshAll}
                />
              ))}
            </div>

            <div className = "flex-1 flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
              <h1>In Progress</h1>
              {tasks.filter((task)=>task.status == "inprogress" && task.title.toLowerCase().includes(searchterm.toLowerCase())).map((task)=>(
                <TaskCard 
                key={task._id}
                title={task.title}
                description={task.description}
                priority={task.priority}
                status={task.status}
                _id = {task._id}
                fetchTasks = {refreshAll}
                />
              ))}
            </div>
            <div className = "flex-1 flex flex-col gap-4 p-4 bg-gray-100 rounded-xl">
              <h1>Done</h1>
              {tasks.filter((task)=>task.status == "done" && task.title.toLowerCase().includes(searchterm.toLowerCase())).map((task)=>(
                <TaskCard 
                key={task._id}
                title={task.title}
                description={task.description}
                priority={task.priority}
                status={task.status}
                _id = {task._id}
                fetchTasks = {refreshAll}
                />
              ))}
            </div>
          </div>

          <div className="w-72 flex flex-col gap-3 p-4 bg-gray-100 rounded-xl max-h-[600px] overflow-y-auto">
            <h2 className="font-bold text-lg">Activity Log</h2>
            {logs.length === 0 && <p className="text-sm text-gray-500">No activity yet.</p>}
            {logs.map((log) => (
              <div key={log._id} className="bg-white rounded-lg p-3 shadow-sm text-sm">
                <p className="font-semibold capitalize">{log.action.replace("_", " ")}</p>
                <p className="text-gray-700">{log.tasktitle}</p>
                {log.detail && <p className="text-gray-500 text-xs">{log.detail}</p>}
                <p className="text-gray-400 text-xs mt-1">{new Date(log.timestamp).toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
     </>
   );
}