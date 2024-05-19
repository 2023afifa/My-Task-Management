import React from 'react';
import { IoCheckmarkDoneSharp } from 'react-icons/io5';

const Archive = ({ task }) => {
    return (
        <div className="mb-2 p-5 bg-slate-100 rounded shadow">
            <div className='flex items-center mb-2'>
                <h3 className="text-lg font-medium mr-2">{task.title}</h3>
                <IoCheckmarkDoneSharp className='text-2xl text-green-500' />
            </div>
            <p className="text-justify text-sm"><span className='font-medium'>Task Description:</span> {task.description}</p>
            <p className="text-sm"><span className='font-medium'>Deadline:</span> {task.date}</p>
        </div>
    );
};

export default Archive;