import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            try {
                const response = await fetch('http://localhost:4000/api/posts');
                const json = await response.json();
               
                if(response.ok) {
                    setData(json);
                }
            } catch (error) {
                setError(error.message || 'Failed to fetch data.')
            }finally{
                setLoading(false);
            }
        }

        fetchData()
    }, []);

    return (
        <DataContext.Provider value={{data, loading, error}}>
            {children}
        </DataContext.Provider>
    )
}