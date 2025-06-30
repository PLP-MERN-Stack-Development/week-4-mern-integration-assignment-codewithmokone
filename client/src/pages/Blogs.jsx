import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";

const categories = [
    'HTML',
    'CSS',
    'Javascript',
    'React'
]

const Blogs = () => {
    // const [categories, setCategories] = useState(categories);
    const {data, loading, error} = useContext(DataContext);

    console.log(data);
    
    return (
        <main className="w-full h-dvh flex justify-center bg-gray-300">
            <div className="w-4/5">
                <h1>Blogs.</h1>
                <div className="grid grid-cols-3 sm:gap-8 md:gap-20 lg:gap-0">
                {loading ? (
                    <div className="flex items-center justify-center">
                        Loading......
                    </div>
                ) : (
                    <>
                        {data.map((blog, index) => (
                            <div key={index} className="w-64 h-40 bg-white rounded ">
                                <img src="#" alt="#" />
                                <h4>{blog.title}</h4>
                                <p>{blog.content}</p>
                            </div>
                        ))}
                    </>
                )}
                </div>
            </div>
        </main>
    )
}

export default Blogs;