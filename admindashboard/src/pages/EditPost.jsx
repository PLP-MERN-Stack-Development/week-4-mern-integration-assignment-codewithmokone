import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import { DataContext } from "../context/DataContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const postAPI = import.meta.env.VITE_POST_API;
const categoryAPI = import.meta.env.VITE_CAT_API;

const EditPost = () => {
    const { id } = useParams();
    const { data, loading, updateItem } = useContext(DataContext);
    const { userId } = useContext(AuthContext)
    const post = data.find(post => post._id.toString() === id);

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

    const [allCategories, setAllCategories] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Pre-fill form data after loading
    useEffect(() => {
        // if (post) {
        //     setFormData({
        //         title: post.title,
        //         content: post.content,
        //         featuredImage: '',
        //         slug: post.slug,
        //         excerpt: post.excerpt,
        //         category: post.category,
        //         tags: post.tags.join(', '),
        //         isPublished: post.isPublished,
        //     });
        // }

        if (!loading && data.length > 0) {
            // const post = data.find(post => post._id.toString() === id);
            if (post) {
                setFormData({
                    title: post.title,
                    content: post.content,
                    featuredImage: '',
                    slug: post.slug,
                    excerpt: post.excerpt,
                    category: post.category,
                    tags: post.tags.join(', '),
                    isPublished: post.isPublished,
                });
            }
        }

        const fetchCategories = async () => {
            try {
                const res = await axios.get(categoryAPI);
                if (res.status === 200) {
                    setAllCategories(res.data); // assuming res.data is an array of categories
                }
            } catch (err) {
                console.error(err);
                setError("Failed to load categories.");
            }
        };

        fetchCategories();
    }, [loading, data, id]);

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (name === "featuredImage" && files.length > 0) {
            setImageFile(files[0]);

        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: type === "checkbox" ? checked : value,
            }));
        }
    }

    // Fetching category id
    // const fetchCategoryId = async (id) => {
    //     console.log("Post category: ", id);

    //     try {
    //         const res = await axios.get(`${categoryAPI}${id}`);
    //         if (res.status === 200) {
    //             return res.data;
    //         } else {
    //             throw new Error("Category not found.");
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         setError("Failed to fetch category.");
    //         return null;
    //     }
    // };

    // Handles updating a post
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(null);
        setSuccess(false);

        try {
            // Fetch category ID
            // const categoryId = await fetchCategoryId(formData.category);
            // if (!categoryId) return;

            const formPayload = new FormData();
            formPayload.append("title", formData.title);
            formPayload.append("content", formData.content);
            formPayload.append("slug", formData.slug);
            formPayload.append("excerpt", formData.excerpt);
            formPayload.append("category", formData.category);
            formPayload.append("tags", JSON.stringify(formData.tags.split(',').map(tag => tag.trim())));
            formPayload.append("isPublished", formData.isPublished);
            formPayload.append("author", userId);
            if (imageFile) formPayload.append("featuredImage", imageFile);

            for (let [key, value] of formPayload.entries()) {
                console.log(key, value);
            }
            
            // Update with proper headers if needed
            // const res = await axios.put(`${postAPI}/${id}`, formPayload, {
            //     headers: { 'Content-Type': 'multipart/form-data' }
            // });

            const res = await updateItem(`${post._id}`, formPayload);

            if (res) {
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
            setImageFile(null);
        } catch (error) {
            console.error(error);
            setError(error.response?.data?.message || 'Failed to update post.');
        }
    }

    return (
        <div className="w-full h-screen flex justify-center bg-gray-300">
            <div className="w-8/12 h-full sm:w-11/12 mt-10 ">
                <div className="w-full flex flex-col items-center justify-center">
                    {/* Main heading */}
                    <h2 className="font-medium">Update A Post</h2>

                    {/* Create post form */}
                    <form className="flex flex-col mt-4" onSubmit={handleSubmit} encType="multipart/form-data">
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
                            {allCategories.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                    {cat.title}
                                </option>
                            ))}
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
                        <label className="my-2">Featured Image</label>
                        <input
                            className="w-96 bg-white"
                            type="file"
                            name="featuredImage"
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
                        <button className="p-4 bg-blue-500 rounded py-2 mt-4 text-white" type="submit">update Post</button>
                        {success ? <p className="text-green-600 text-center mt-4">Post updated successfully.</p> : ''}
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPost;