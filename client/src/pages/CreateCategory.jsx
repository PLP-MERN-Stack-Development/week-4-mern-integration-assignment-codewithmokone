import axios from "axios";
import { useState } from "react";

const categoryAPI = import.meta.env.VITE_CAT_API;

const CreateCategory = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });
    const [error,setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    }


    // Handles creating a new category
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null);
        setSuccess(false);

        try {

            const res = await axios.post(categoryAPI, {
                title: formData.title,
                description: formData.description
            });
            if (res.status === 201) {
                setSuccess(true);
                setFormData({
                title: '',
                description: ''
                })     
            }
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'Failed to create a new category.');
        }
    }

    return (
        <main className="w-full h-screen flex justify-center bg-gray-300">
            <div className="w-8/12 h-full flex items-center justify-center sm:w-11/12 mt-10 ">
                <div className="w-full flex flex-col items-center justify-center">
                    {/* Main heading */}
                    <h2 className="font-medium">Create A Post</h2>
                    
                    {/* Create post form */}
                    <form className="flex flex-col mt-4" onSubmit={handleSubmit}>
                        {/* Title input */}
                        <label className="my-2" htmlFor="title">Title</label>
                        <input 
                            type="text"
                            className="w-96 p-1 bg-white"
                            name="title"
                            maxLength={100}
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />
                        {/* Slug input */}
                        <label className="my-2" htmlFor="description">Description</label>
                        <input 
                            type="text"
                            className="w-96 p-1 bg-white"
                            name="description"
                            maxLength={100}
                            value={formData.description}
                            onChange={handleChange}
                            required
                        />
                        {/* Submit button */}
                        <button className="p-4 bg-blue-500 rounded py-2 mt-4 text-white" type="submit">Create Post</button>
                        {success ? <p className="text-green-600 text-center mt-4">Category created successfully.</p> : ''}
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    </form>
                </div>
            </div>
        </main>
    )
}

export default CreateCategory;