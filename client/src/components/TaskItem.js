import React from 'react';

const TaskItem = ({ task, onDelete, onUpdate }) => {
    return (
        <div className="bg-teal-100 p-4 rounded-lg shadow-md mb-4">
            <h3 className="text-xl font-bold mb-2">{task.title}</h3>
            <p className="mb-1"><strong>Description:</strong> {task.description}</p>
            <p className="mb-1"><strong>Due Date:</strong> {new Date(task.due_date).toLocaleString()}</p>
            <p className="mb-1"><strong>Assigned To:</strong> {task.assigned_to}</p>
            <p className="mb-4"><strong>Progress:</strong> {task.progress}</p>
            <div className="flex space-x-2">
                <button
                    onClick={() => onUpdate(task)}
                    className="flex-1 py-2 bg-yellow-500 text-white rounded"
                >
                    Edit
                </button>
                <button
                    onClick={() => onDelete(task.id)}
                    className="flex-1 py-2 bg-red-500 text-white rounded"
                >
                    Delete
                </button>
            </div>
        </div>
    );
};

export default TaskItem;
