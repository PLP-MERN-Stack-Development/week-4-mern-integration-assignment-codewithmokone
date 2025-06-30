import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";

const ViewPost = () => {

    const { id } = useParams();
    const { data, loading, error } = useContext(DataContext);

    const post = data.find(post => post._id.toString() === id)

    return (
        <>
            {loading ? (
                <></>
            ) : (
                    <div className="w-full h-full flex justify-center bg-gray-300">
                        <div className="w-8/12 h-full sm:w-11/12 mt-10">
                            <div className="flex justify-center">
                                <img className="w-96 h-72 bg-amber-300" src="#" alt="#" />
                            </div>
                            <div className="m-10">
                                <h4 className="font-medium">{post.title}</h4>
                            </div>
                            <div className="m-10">
                                <p>{post.content}</p>
                            </div>
                        </div>
                    </div>
            )}
        </>
    )
}

export default ViewPost;