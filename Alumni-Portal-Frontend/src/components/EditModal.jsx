import React, { useState, useEffect } from 'react';

const EditModal = ({ isOpen, onClose, data, onSave }) => {
    const [formData, setFormData] = useState(data);

    useEffect(() => {
        setFormData(data);
    }, [data]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-5 rounded-lg w-11/12 md:w-1/2">
                <h2 className="text-2xl font-semibold mb-4">Edit Information</h2>
                <form className="space-y-4">
                    {Object.keys(formData).map((key) => (
                        <div key={key}>
                            <label className="block text-gray-700 capitalize">{key}</label>
                            <input
                                type="text"
                                name={key}
                                value={formData[key]}
                                onChange={handleChange}
                                className="w-full px-3 py-2 border rounded-lg"
                            />
                        </div>
                    ))}
                </form>
                <div className="mt-4 flex justify-end space-x-2">
                    <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded-lg">Cancel</button>
                    <button onClick={handleSave} className="bg-purple-600 text-white px-4 py-2 rounded-lg">Save</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;