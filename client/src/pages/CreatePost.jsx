import { useState } from "react";
import axios from 'axios';


const currentUserId = 1;
const API = import.meta.env.VITE_POST_API
const CategoryAPI = import.meta.env.VITE_CAT_API
console.log(API);


const CreatePost = () => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        featuredImage: '',
        slug: '',
        excerpt: '',
        category: '',
        tags: '',
        isPublished: false
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

    // Fetching category id
    const fetchCategoryId = async (category) => {      
        try {
            const res = await axios.get(`${CategoryAPI}${category}`);
            if (res.status === 200) {
                return res.data;
            } else {
                throw new Error("Category not found.");
            }
        } catch (err) {
            console.error(err);
            setError("Failed to fetch category.");
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null);
        setSuccess(false);

        try {
            // Fetch category ID
            const categoryId = await fetchCategoryId(formData.category);

            if (!categoryId) return;

            const payload = {
                ...formData,
                tags: formData.tags.split(',').map(tag => tag.trim()),
                category: categoryId,
                author: currentUserId,
            };

            console.log('Payload: ', payload);

            const res = await axios.post(API, payload);
            if (res.status === 201) {
                setSuccess(true);
                setFormData({
                title: '',
                content: '',
                featuredImage: '',
                slug: '',
                excerpt: '',
                category: '',
                tags: '',
                isPublished: false,
                });
            }
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'Failed to create a new post.');
        }
    }

    return (
        <div className="w-full h-full flex justify-center bg-gray-300">
            <div className="w-8/12 h-full sm:w-11/12 mt-10 ">
                <div className="w-full flex flex-col items-center justify-center">
                    <h2>Create A Post</h2>
                    
                    {error && <p style={{color: 'red'}}>{error}</p>}
                    {success && <p style={{color: 'green'}}>{success}</p>}

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <label className="my-2" htmlFor="title">Title</label>
                        <input 
                            type="text"
                            className="w-80 bg-white"
                            name="title"
                            maxLength={100}
                            value={formData.title}
                            onChange={handleChange}
                            required
                        />

                        <label className="my-2" htmlFor="slug">Slug</label>
                        <input 
                            type="text"
                            className="w-80 bg-white"
                            name="slug"
                            maxLength={100}
                            value={formData.slug}
                            onChange={handleChange}
                            required
                        />

                        <label className="my-2" htmlFor="content">Content</label>
                        <textarea 
                            type="text"
                            className="w-80 bg-white"
                            name="content"
                            maxLength={200}
                            value={formData.content}
                            onChange={handleChange}
                            required
                        ></textarea>

                        <label className="my-2">Excerpt (max 200 chars)</label>
                        <textarea
                        className="w-80 bg-white"
                        name="excerpt"
                        maxLength={200}
                        value={formData.excerpt}
                        onChange={handleChange}
                        ></textarea>

                        <label className="my-2">Featured Image URL</label>
                        <input
                        className="w-80 bg-white"
                        type="text"
                        name="featuredImage"
                        value={formData.featuredImage}
                        onChange={handleChange}
                        />

                        <label className="my-2">Category ID *</label>
                        <input
                        className="w-80 bg-white"
                        type="text"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        />

                        <label className="my-2">Tags (comma separated)</label>
                        <input
                        className="w-80 bg-white"
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        />

                        <label>
                        <input
                            className="bg-white"
                            type="checkbox"
                            name="isPublished"
                            checked={formData.isPublished}
                            onChange={handleChange}
                        />
                        Publish Now
                        </label>

                        <button className="p-4 bg-amber-400" type="submit">Create Post</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;