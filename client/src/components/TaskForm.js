import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, task }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [due_date, setDueDate] = useState('');
    const [assigned_to, setAssignedTo] = useState('');
    const [progress, setProgress] = useState('not_started_yet');

    useEffect(() => {
        if (task) {
            setTitle(task.title);
            setDescription(task.description);
            setDueDate(new Date(task.due_date).toISOString().slice(0, 16));
            setAssignedTo(task.assigned_to);
            setProgress(task.progress);
        }
    }, [task]);

    const handleSubmit = (e) => {
        e.preventDefault();
        let formattedDueDate = new Date(due_date).toISOString();
        onSubmit({ title, description, due_date: formattedDueDate, assigned_to, progress });
        setTitle('');
        setDescription('');
        setDueDate('');
        setAssignedTo('');
        setProgress('not_started_yet');
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md space-y-4">
            <div>
                <label className="block text-gray-700">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <div>
                <label className="block text-gray-700">Description</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                ></textarea>
            </div>
            <div>
                <label className="block text-gray-700">Due Date</label>
                <input
                    type="datetime-local"
                    value={due_date}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <div>
                <label className="block text-gray-700">Assigned To</label>
                <input
                    type="text"
                    value={assigned_to}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                />
            </div>
            <div>
                <label className="block text-gray-700">Progress</label>
                <select
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                    required
                    className="w-full p-2 border border-gray-300 rounded mt-1"
                >
                    <option value="not_started_yet">Not Started Yet</option>
                    <option value="in_progress">In Progress</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">
                {task ? 'Update Task' : 'Save Task'}
            </button>
        </form>
    );
};

export default TaskForm;
