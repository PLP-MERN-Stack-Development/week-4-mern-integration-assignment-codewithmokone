import { useContext, useState } from "react";
import axios from 'axios';
import AuthContext from "../context/AuthContext";

const postAPI = import.meta.env.VITE_POST_API;
const categoryAPI = import.meta.env.VITE_CAT_API;

const CreatePost = () => {
    const { userId } = useContext(AuthContext);
    
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
            const res = await axios.get(`${categoryAPI}${category}`);
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

    // Handles creating a new bllog post
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
                author: { _id: userId},
            };

            console.log('Payload', payload);

            const res = await axios.post(postAPI, payload);
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
                        <label className="my-2" htmlFor="slug">Slug</label>
                        <input 
                            type="text"
                            className="w-96 p-1 bg-white"
                            name="slug"
                            maxLength={100}
                            value={formData.slug}
                            onChange={handleChange}
                            required
                        />
                        {/* Content input */}
                        <label className="my-2" htmlFor="content">Content</label>
                        <textarea 
                            type="text"
                            className="w-96 h-50 p-1 bg-white"
                            name="content"
                            maxLength={2000}
                            value={formData.content}
                            onChange={handleChange}
                            required
                        ></textarea>
                        {/* Excerpt input */}
                        <label className="my-2">Excerpt (max 200 chars)</label>
                        <textarea
                        className="w-96 p-1 bg-white"
                        name="excerpt"
                        maxLength={200}
                        value={formData.excerpt}
                        onChange={handleChange}
                        ></textarea>
                        {/* Category selector input */}
                        <label className="my-2">Category</label>
                        <select className="w-96 p-1 bg-white" id="category" value={formData.category} onChange={handleChange} name="category" required>
                            <option value="HTML">HTML</option>
                            <option value="CSS">CSS</option>
                            <option value="Javascript">Javascript</option>
                        </select>
                        {/* Tags input */}
                        <label className="my-2">Tags (comma separated)</label>
                        <input
                        className="w-80 bg-white"
                        type="text"
                        name="tags"
                        value={formData.tags}
                        onChange={handleChange}
                        />
                        {/* Image input */}
                        <label className="my-2">Featured Image URL</label>
                        <input
                            className="w-96 bg-white"
                            type="file"
                            name="featuredImage"
                            value={formData.featuredImage}
                            onChange={handleChange}
                        />
                        {/* Publish input */}
                        <label className="mt-4"> 
                        <input
                            className="bg-white"
                            type="checkbox"
                            name="isPublished"
                            checked={formData.isPublished}
                            onChange={handleChange}
                        />
                         Publish Now
                        </label>
                        {/* Submit button */}
                        <button className="p-4 bg-blue-500 rounded py-2 mt-4 text-white" type="submit">Create Post</button>
                        {success ? <p className="text-green-600 text-center mt-4">Post created successfully.</p> : ''}
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreatePost;