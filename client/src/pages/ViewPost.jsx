import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
import AuthContext from "../context/AuthContext";
import axios from "axios";

const ViewPost = () => {

    const { id } = useParams();
    const { data, loading, error } = useContext(DataContext);
    const { userId } = useContext(AuthContext);
    const [newComment, setNewComment] = useState("");

    const post = data.find(post => post._id.toString() === id);

    const handleCommentSubmit = async (e) => {
        e.preventDefault();

        if(!userId){
            alert('Please login to share your thoughts.');
        }else{
            if (newComment.trim() === "") return;
        
            try {
                
                const response = await axios.put(`http://localhost:4000/api/posts/${id}/comments`, {
                    _id: id,
                    userId: userId,
                    content: newComment,
                });
                
                setNewComment("");
            } catch (error) {
                console.error("Error submitting comment:", error);
            }
        }
        
    };

    return (
        <main>
            {loading ? (
                <div>Loading.....</div>
            ) : (
                <div className="w-full h-full flex justify-center bg-gray-300">
                    <div className="w-8/12 h-full flex flex-col items-center sm:w-11/12 mt-10 ">
                        <div className="flex justify-center">
                            <img
                                className="w-[80%] bg-amber-400"
                                src={`data:${post.featuredImage.type};base64,${post.featuredImage.data}`}
                                alt={post.title || "Post image"}
                            />
                        </div>
                        <div className="m-10">
                            <h4 className="font-medium text-center">{post.title}</h4>
                        </div>
                        <div className="m-10 w-[80%] h-fit">
                            <p>{post.content}</p>
                        </div>

                        {/* Comment Section */}
                        <div className="w-[80%] border-t pt-4">
                            <h5 className="font-semibold mb-2">Comments</h5>
                            <form onSubmit={handleCommentSubmit} className="mb-4">
                                <textarea
                                    className="w-full border rounded p-2"
                                    placeholder="Write a comment..."
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                                >
                                    Post Comment
                                </button>
                            </form>
                            <div>
                                {post.comments.length === 0 ? (
                                    <p className="text-gray-500">No comments yet.</p>
                                ) : (
                                    post.comments.map((comment) => (
                                        <div
                                            key={comment._id}
                                            className="border-b py-2 text-sm text-gray-700"
                                        >
                                            <div className="flex flex-col gap-4">
                                                <p>{comment.content}</p>
                                                <p>{comment.createdAt}</p>
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}

export default ViewPost;