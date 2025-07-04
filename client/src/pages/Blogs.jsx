import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { Link } from 'react-router-dom'
import Search from "../components/Search";

const categories = [
    'HTML',
    'CSS',
    'Javascript',
    'React'
]

const Blogs = () => {
    const { data, loading, error } = useContext(DataContext);
    const [searchResults, setSearchResults] = useState([]);

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    const handleSearch = (query) => {
        if (query === ''){
            setSearchResults([]);
        }else{
            const filterBySearch = data.filter((item) =>
                item.title?.toLowerCase().includes(query.toLowerCase()) || 
                item.content?.toLowerCase().includes(query.toLowerCase())
            );
            console.log(filterBySearch);
            setSearchResults(filterBySearch);
        }
    }

    const postsToDisplay = searchResults.length > 0 ? searchResults : data;
    

    return (
        <main className="w-full h-screen flex justify-center bg-gray-300">
            <div className="w-4/5 h-max mt-10">
                 <div className="flex justify-center">
                    <Search
                        placeholder="Search..."
                        onSearch={handleSearch}
                    />
                </div>
                <div className="grid grid-cols-1 sm:gap-8 md:gap-10 lg:gap-0 mt-10">
                    {loading ? (
                        <div className="flex items-center justify-center">
                            Loading......
                        </div>
                    ) : (
                        <>
                            {postsToDisplay.map((blog, index) => (
                                <Link to={`viewpost/${blog._id}`}>
                                    <div key={index} className="flex bg-white p-3 rounded hover:shadow-2xl">
                                        <div className="w-3/4 flex flex-col gap-2">
                                            <h4 className="font-medium">{blog.title}</h4>
                                            <p className="text-3">{truncateText(blog.content, 200)}</p>
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
        </main>
    )
}

export default Blogs;