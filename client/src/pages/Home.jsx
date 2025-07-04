import { useState, useEffect, useContext } from "react";
import Search from "../components/Search";
import { DataContext } from "../Context/DataContext";
import { Link } from 'react-router-dom'

const Home = () => {
    const { data, loading, error } = useContext(DataContext);

    return (
        <main className="w-full h-full flex justify-center bg-gray-300">
            <div className="w-8/12 h-full sm:w-11/12">
                <div className="flex justify-center">
                    <Search />
                </div>
                {/* <div className="flex sm:flex-col gap-4 mt-8">
                    <h1 className="font-medium">Featured:</h1>
                    <div className="flex  gap-4 sm:flex-col md:flex-row">
                        <div className="w-full h-80 flex flex-col justify-center items-center  bg-white rounded ">
                            <img className="h-4/5" src="#" alt="#" />
                            <h4>Testing</h4>
                        </div>
                        <div className="w-full h-80 flex flex-col justify-center items-center  bg-white rounded ">
                            <img className="h-4/5" src="#" alt="#" />
                            <h4>Testing</h4>
                        </div>
                    </div>
                </div> */}
                <div className="mt-4">
                    <h2 className="font-medium">Latest Blogs</h2>
                    <div className="flex flex-col mt-4 gap-5 ">
                        {/* Sample cards */}
                        {loading ? (
                            <div>
                                Loading.....
                            </div>
                        ) : (
                            <>
                                {data.map((blog, index) => (
                                    <Link to={`viewpost/${blog._id}`}>
                                        <div key={index} className="flex bg-white  border p-3 rounded">
                                        <div className="w-3/4 flex flex-col gap-2">
                                            <h4 className="font-medium">{blog.title}</h4>
                                            <p className="text-3">{blog.content}</p>
                                        </div>
                                        <img
                                            className="w-[30%] bg-amber-400"
                                            src={`data:${blog.featuredImage.type};base64,${blog.featuredImage.data}`}
                                            alt={blog.title || "Post image"}
                                        />
                                        </div>
                                    </Link>
                                    
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;