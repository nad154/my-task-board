import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { type TaskStatus } from './types/taskType'

import './App.css'


import { TaskCard } from './components/TaskCard'

const mockTasks = [
  {
    taskName: "Design System Migration",
    taskDescription: "Update core components to match new Tailwind branding guidelines.",
    taskStatus: "In Progress",
    taskIcon: "AlarmClock"
  },
  {
    taskName: "Fix Authentication Bug",
    taskDescription: "Resolve token refresh failure when session expires in mobile view.",
    taskStatus: "To Do",
    taskIcon: "Balloon"
  },
  {
    taskName: "Database Backup Automation",
    taskDescription: "Configure nightly cron job to export PostgreSQL dumps to S3 bucket.",
    taskStatus: "Completed",
    taskIcon: "Album"
  },
  {
    taskName: "Legacy API Clean Up",
    taskDescription: null, // Testing optional null case
    taskStatus: "Cancelled",
    taskIcon: "Bean"
  },
  {
    taskName: "User Onboarding Survey",
    taskDescription: "Implement 3-step modal survey for new registered users.",
    taskStatus: "To Do",
    taskIcon: "AlarmClock", 
  },
];

function App() {

  function toggleTaskDetails(task_id: string) {
    console.log("task id: ", {task_id}); 
  }

  return (
    <div className="w">
      <div className="flex flex-col items-center mt-10 ">
        <div className="flex w-100 ">
          <h1 className="font-bold text-3xl">BOARD TITLE</h1>
        </div>
        <div className="flex w-100 mt-2">
          <h3 className="">subtext something something</h3>
        </div>

        
      </div>
      <div className="flex flex-col mt-8 items-center justify-center text-center">
        {mockTasks.map((task, index) => (
          <TaskCard 
            taskName={task.taskName}
            taskDescription={task.taskDescription}
            taskStatus={task.taskStatus}
            taskIcon={task.taskIcon}
            clickFunction={()=> toggleTaskDetails(`mock-${index}`)}
          />
        ))}

      </div >
      
    
    </div>
  )
}

export default App
