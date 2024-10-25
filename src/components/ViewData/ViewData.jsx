import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees, deleteEmployee } from '../../service/Action/Action';
import { useNavigate } from 'react-router-dom';

const ViewData = () => {
    const { employees } = useSelector(state => state.empReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchEmployees());
    }, [dispatch]);

    const handleEdit = (employee) => {
        
        navigate('/edit-employee', { state: { employee } });
    };

    const handleDelete = (id) => {
        dispatch(deleteEmployee(id));
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Employee List</h1>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-blue-400 text-white uppercase text-sm leading-normal">
                            <th className='py-3 px-6 text-center'>#</th>
                            <th className="py-3 px-6 text-center">Name</th>
                            <th className="py-3 px-6 text-center">Email</th>
                            <th className="py-3 px-6 text-center">Position</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {employees.map((emp, index) => (
                            <tr key={emp.id} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-6">{index + 1}</td>
                                <td className="py-3 px-6">{emp.name}</td>
                                <td className="py-3 px-6">{emp.email}</td>
                                <td className="py-3 px-6">{emp.position}</td>
                                <td className="py-3 px-6">
                                    <button className="text-blue-600 hover:underline" onClick={() => handleEdit(emp)}>Edit</button>
                                    <button className="text-red-600 hover:underline ml-4" onClick={() => handleDelete(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewData;
