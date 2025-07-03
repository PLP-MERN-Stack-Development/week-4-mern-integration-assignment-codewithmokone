import { useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Link } from 'react-router-dom'

const categories = [
    'HTML',
    'CSS',
    'Javascript',
    'React'
]

const Posts = () => {
    const {data, loading, error} = useContext(DataContext);

    function truncateText(text, maxLength) {
        if (!text) return ''; // Guard clause for null/undefined
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }
    
    return (
        <main className="w-full h-dvh flex justify-center bg-gray-300">
            <div className="w-4/5">
                <div className="grid grid-cols-3 mt-6 sm:gap-8 md:grid-cols-1 md:gap-8 lg:grid-cols-3 lg:gap-0">
                {loading ? (
                    <div className="flex items-center justify-center">
                        Loading......
                    </div>
                ) : (
                    <>
                        {data.map((post, index) => (
                            <Link key={index} to={`viewpost/${post._id}`}>
                                 <div className="w-full h-44 bg-white rounded md:flex p-4 ">
                                    <img className="w-[30%] bg-amber-400" src={`data:${post.featuredImage};base64,${post.featuredImage.data}`} alt="#" />
                                    {/* <img src={post.featuredImage} alt="" /> */}
                                    <div className="w-[70%] ml-4 flex flex-col justify-center ">
                                        <h4 className="font-medium">{post.title}</h4>
                                        <p className="mt-2.5">{truncateText(post.content, 100)}</p>
                                        <div className="flex justify-end gap-1.5 mt-2.5">
                                            <button >Edit</button>
                                            <button className="text-red-600">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </>
                )}
                </div>
            </div>
        </main>
    )
}

export default Posts;