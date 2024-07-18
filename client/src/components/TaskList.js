import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
    return (
        <div>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
            ))}
        </div>
    );
};

export default TaskList;
