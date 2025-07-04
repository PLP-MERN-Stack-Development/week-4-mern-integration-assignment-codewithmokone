import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

const ViewPost = () => {
    const { id } = useParams();

    const { data, loading, error } = useContext(DataContext);

    const post = data.find(post => post._id.toString() === id)

    return (
        <main className='w-screen h-screen flex justify-center  bg-gray-300'>
            <div className="w-8/12 h-full flex justify-center">
                {loading ? (
                    <div>Loading.....</div>
                ) : (
                    <div className='flex flex-col items-center mt-8 border'>
                        <div>
                            <img
                                className="w-[700px] bg-amber-400"
                                src={`data:${post.featuredImage.type};base64,${post.featuredImage.data}`}
                                alt={post.title || "Post image"}
                            />
                        </div>
                        <div className='mt-8'>
                            <h4 className="font-medium">{post.title}</h4>
                        </div>
                        <div className='mt-8'>
                            <p>{post.content}</p>
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default ViewPost;