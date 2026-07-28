import {useState} from 'react'
import { type TaskStatus } from '../types/taskType';
import './TaskCard.css'
import SetIcons from './SetIcons';
import {Routes} from 'react-router'



interface TaskCardProps {
    taskName: string; 
    taskDescription?: string | null; 
    taskIcon: string; 
    taskStatus: TaskStatus;
}

export function TaskCard({ taskName, taskDescription, taskIcon, taskStatus }: TaskCardProps) {
    taskIcon = taskIcon || "Circle"; 
    let bgcolor = taskStatus === "Completed" ? "bg-green-500" 
                 : taskStatus === "In Progress" ? "bg-yellow-500"   
                 : taskStatus === "To Do" ? "bg-gray-500" 
                 : taskStatus === "Cancelled" ? "bg-red-500"
                 : "bg-gray-200"; 
    let iconColor = taskStatus === "Completed" ? "green" 
                 : taskStatus === "In Progress" ? "yellow"   
                 : taskStatus === "To Do" ? "black" 
                 : taskStatus === "Cancelled" ? "red"
                 : "gray"; 

    return (
        <div className={`flex items-center gap-4 rounded-xl p-4 shadow-sm transition hover:shadow-gray-400 ${bgcolor}`} >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gray-200">
                <SetIcons iconName={taskIcon} color={iconColor}/>
            </div>
            <div className="flex flex-col w-xs">
                <div>
                    <h3 className="text-sm font-semibold text-gray-900">{taskName}</h3>
                </div>
                {taskDescription && (
                    <div>

                    </div>
                )}
                <div>

                </div>
            </div>
        </div>
    )
}