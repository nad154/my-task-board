import {useState} from 'react'
import { type TaskStatus } from '../types/taskType';
import './TaskCard.css'
import SetIcons from './SetIcons';



interface TaskCardProps {
    taskName: string; 
    taskDescription?: string | null; 
    taskIcon: string; 
    taskStatus: TaskStatus;
    clickFunction: () => void; 
}

export function TaskCard({ taskName, taskDescription, taskIcon, taskStatus, clickFunction }: TaskCardProps) {

    taskIcon = taskIcon || "Circle"; 
    let bgcolor = taskStatus === "Completed" ? "bg-green-300" 
                 : taskStatus === "In Progress" ? "bg-yellow-200"   
                 : taskStatus === "To Do" ? "bg-gray-300" 
                 : taskStatus === "Cancelled" ? "bg-red-200"
                 : "bg-gray-400"; 
    let iconColor = taskStatus === "Completed" ? "green" 
                 : taskStatus === "In Progress" ? "orange"   
                 : taskStatus === "To Do" ? "black" 
                 : taskStatus === "Cancelled" ? "red"
                 : "gray"; 

    return (
        <button className={`flex items-center gap-4 rounded-xl p-4 shadow-sm transition hover:shadow-gray-400 mb-3 hover:border-white ${bgcolor}`}
            onClick={clickFunction}
        >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white">
                <SetIcons iconName={taskIcon} color={iconColor}/>
            </div>
            <div className={`flex flex-row w-xs justify-between ${taskDescription ? "" : ""} h-full`}>
                <div className="flex flex-col ml-3 text-left ">
                    <h3 className="flex text-sm font-semibold text-gray-900">{taskName}</h3>
                    {taskDescription && (
                        <p className="flex mt-1 text-sm text-gray-600">{taskDescription}</p>
                    )}
                </div>
                
                <div className="flex w-10 h-10 shrink-0 items-center justify-center rounded-lg">
                    <SetIcons iconName="Activity" color={iconColor}/>
                </div>
            </div>
        </button>
    )
}