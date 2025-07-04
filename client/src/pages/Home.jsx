import { useState, useEffect, useContext } from "react";
import Search from "../components/Search";
import { DataContext } from "../Context/DataContext";
import { Link } from 'react-router-dom'

const Home = () => {
    const { data, loading, error } = useContext(DataContext);

    const [searchResults, setSearchResults] = useState([]);

    const truncateText = (text, maxLength) => {
        if (!text) return ''; // Guard clause for null/undefined
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }

    const handleSearch = (query) => {
        console.log("Search: ", query);
        if (query === ''){
            setSearchResults([]);
        }else{
            const filterBySearch = data.filter((item) =>
                item.title?.toLowerCase().includes(query.toLowerCase()) || 
                item.content?.toLowerCase().includes(query.toLowerCase())
            );
            console.log(filterBySearch);
            setSearchResults(filterBySearch);
            // setCurrentPage(1);
        }
    }

    const postsToDisplay = searchResults.length > 0 ? searchResults : data;

    return (
        <main className="w-full h-screen flex justify-center bg-gray-300">
            <div className="w-8/12 h-max sm:w-11/12">
                <div className="flex justify-center">
                    <Search
                        placeholder="Search..."
                        onSearch={handleSearch}
                    />
                </div>
                <div className="mt-4">
                    <h2 className="font-medium">Latest Blogs</h2>
                    <div className="flex flex-col mt-4 gap-5 ">
                        {loading ? (
                            <div>
                                Loading.....
                            </div>
                        ) : (
                            <>
                                {postsToDisplay.map((post, index) => (
                                    <Link to={`viewpost/${post._id}`}>
                                        <div key={index} className="flex bg-white  border p-3 rounded">
                                        <div className="w-3/4 flex flex-col gap-2">
                                            <h4 className="font-medium">{post.title}</h4>
                                            <p className="text-3">{truncateText(post.content, 200)}</p>
                                        </div>
                                        <img
                                            className="w-[30%] bg-amber-400"
                                            src={`data:${post.featuredImage.type};base64,${post.featuredImage.data}`}
                                            alt={post.title || "Post image"}
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