import React, { useEffect, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { getTasks, createTask, deleteTask, updateTask } from '../services/api';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const [editingTask, setEditingTask] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        const response = await getTasks();
        setTasks(response.data);
    };

    const handleAddTask = async (task) => {
        if (editingTask) {
            await updateTask(editingTask.id, task);
            setEditingTask(null);
        } else {
            await createTask(task);
        }
        fetchTasks();
    };

    const handleEditTask = (task) => {
        setEditingTask(task);
        setIsModalOpen(true);
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id);
        fetchTasks();
    };

    const handleCloseModal = () => {
        setEditingTask(null);
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
            <h1 className="text-4xl font-bold mb-6">Task Manager</h1>
            <div className="w-full max-w-md">
                <TaskForm onSubmit={handleAddTask} />
            </div>
            <div className="w-full max-w-md mt-6">
                <TaskList tasks={tasks} onDelete={handleDeleteTask} onUpdate={handleEditTask} />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
                        <h2 className="text-2xl font-bold mb-4">Edit Task</h2>
                        <TaskForm onSubmit={handleAddTask} task={editingTask} />
                        <button
                            onClick={handleCloseModal}
                            className="mt-4 w-full py-2 bg-red-500 text-white rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HomePage;
