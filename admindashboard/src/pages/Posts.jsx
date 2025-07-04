import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from "react";

const categories = [
    'HTML',
    'CSS',
    'Javascript',
    'React'
]

const Posts = () => {
    const { data, loading, deleteItem, error } = useContext(DataContext);
    const navigate = useNavigate();

    const truncateText = (text, maxLength) => {
        if (!text) return ''; // Guard clause for null/undefined
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    const handleDelete = (post) => {
        deleteItem(post._id);
    }

    return (
        <main className="w-full h-full flex flex-row justify-center bg-gray-300">
            <div className="w-full h-screen flex justify-center">
                <div className="h-max grid mt-6 sm:gap-8 md:grid-cols-1 md:gap-4 lg:grid-cols-3 lg:gap-4">
                    {loading ? (
                        <div className="flex items-center justify-center">
                            Loading......
                        </div>
                    ) : (
                        <>
                            {data && data.map((post) => (
                                <div key={post._id} className="w-full lg:w-[480px] h-44 bg-white rounded md:flex md:h-50 flex-col p-4 hover:shadow-2xl mb-6">
                                    <Link className="flex h-[95%]" to={`viewpost/${post._id}`}>
                                        {post.featuredImage?.data ? (
                                            <img
                                                className="w-[30%] bg-amber-400"
                                                src={`data:${post.featuredImage.type};base64,${post.featuredImage.data}`}
                                                alt={post.title || "Post image"}
                                            />
                                        ) : (
                                            <div className="w-[30%] bg-gray-200 flex items-center justify-center text-sm text-gray-600">
                                                No image
                                            </div>
                                        )}
                                        <div className="w-[70%] ml-4 flex flex-col justify-center ">
                                            <h4 className="font-medium">{post.title}</h4>
                                            <p className="mt-2.5">{truncateText(post.content, 100)}</p>
                                        </div>
                                    </Link>
                                    <div className="flex justify-end gap-1.5 mt-2.5">
                                        <button onClick={() => navigate(`viewpost/${post._id}`)}>View</button>
                                        <button onClick={() => navigate(`editpost/${post._id}`)}>Edit</button>
                                        <button className="text-red-600" onClick={() => handleDelete(post)} >Delete</button>
                                    </div>
                                </div>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </main>
    )
}

export default Posts;