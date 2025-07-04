import { useState } from "react";

const Search = ({onSearch}) => {
    const [query, setQuery] = useState('');

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSearch = () => {
        if (onSearch) {
            onSearch(query);
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
        handleSearch();
        }
    };

    // const handleSearchClick = () => {
    //     if (query === ''){
    //         setSearchResults([]);
    //     }else{
    //         // console.log(searchVal);
    //         const filterBySearch = data.filter((item) =>
    //             item.todo.toLowerCase().includes(query.toLowerCase())
    //         );
    //         console.log(filterBySearch);
    //         setSearchResults(filterBySearch);
    //         setCurrentPage(1);
    //     }
    // }


    return (
        <div className="mt-6">
            <input 
                className="w-[70%] rounded-l-4xl px-1.5 py-1 bg-white " 
                type="text" 
                placeholder=" Search"
                value={query}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <button className="bg-blue-500 px-4 py-1 rounded-r-4xl text-white" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;