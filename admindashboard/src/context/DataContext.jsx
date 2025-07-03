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
                    console.log(json);
                    
                }
            } catch (error) {
                setError(error.message || 'Failed to fetch data.')
            }finally{
                setLoading(false);
            }
        }
        fetchData()
    }, []);

    // CREATE
    const createItem = async (newItem) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem),
            });
            const createdItem = await response.json();
            if (response.ok) {
                setData(prevData => [...prevData, createdItem]);
            } else {
                setError(createdItem.message || 'Failed to create item.');
            }
        } catch (error) {
            setError(error.message || 'Failed to create item.');
        }
    };

    // UPDATE
    const updateItem = async (id, updatedItem) => {
        console.log(req.params.formData);
        
        try {
            const response = await fetch(`http://localhost:4000/api/posts/${id}`, {
                method: 'PUT',
                // headers: { 'Content-Type': 'multipart/form-data' },
                body: formData,
            });
            const updated = await response.json();

            if (response.ok) {
                setData(prevData =>
                    prevData.map(item => (item._id === id ? updated : item))
                );
            } else {
                setError(updated.message || 'Failed to update item.');
            }
        } catch (error) {
            setError(error.message || 'Failed to update item.');
        }
    };

    // DELETE
    const deleteItem = async (_id) => {
        
        try {
            const response = await fetch(`http://localhost:4000/api/posts/${_id}`, {
                method: 'DELETE',
            });
            console.log(response);
            
            if (response.ok) {
                setData(prevData => prevData.filter(item => item._id !== _id));
            } else {
                const err = await response.json();
                setError(err.message || 'Failed to delete item.');
            }
        } catch (error) {
            setError(error.message || 'Failed to delete item.');
        }
    };

    return (
        <DataContext.Provider value={{data, loading, deleteItem, updateItem, error}}>
            {children}
        </DataContext.Provider>
    )
}