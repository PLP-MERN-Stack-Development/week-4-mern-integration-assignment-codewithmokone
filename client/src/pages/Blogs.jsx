import { useState } from "react";

const categories = [
    'HTML',
    'CSS',
    'Javascript',
    'React'
]

const Blogs = () => {
    // const [categories, setCategories] = useState(categories);

    return (
        <main className="w-full h-dvh flex justify-center bg-gray-300">
            <div className="w-4/5">
                <h1>Blogs.</h1>
            </div>
        </main>
    )
}

export default Blogs;