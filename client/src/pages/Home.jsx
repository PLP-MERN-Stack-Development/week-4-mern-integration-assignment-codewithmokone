import Search from "../components/Search";

const Home = () => {
    return (
        <main className="w-full h-full flex justify-center bg-gray-300">
            <div className="w-8/12 h-full sm:w-11/12">
                <div className="flex justify-center">
                    <Search />
                </div>
                <div className="flex flex-col gap-4 mt-8">
                    <h1 className="font-medium">Featured:</h1>
                    <div className="flex gap-4 sm:flex-col">
                        <div className="w-full h-80 flex flex-col justify-center items-center  bg-white rounded ">
                            <img className="h-4/5" src="" alt="" />
                            <h4>Testing</h4>
                        </div>
                        <div className="w-full h-80 flex flex-col justify-center items-center  bg-white rounded ">
                            <img className="h-4/5" src="" alt="" />
                            <h4>Testing</h4>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="font-medium">Latest Blogs</h2>
                    <div className="flex flex-col mt-4 gap-5 ">
                        {/* Sample cards */}
                        <div className="flex bg-white  border p-3 rounded">
                            <div className="w-3/4 flex flex-col gap-2">
                                <h4 className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p className="text-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Quibusdam officia, consectetur sed temporibus maxime aut 
                                    amet reprehenderit ipsam fugit, natus commodi similique nulla? 
                                    Recusandae explicabo dicta dolores dignissimos voluptates! 
                                    Suscipit.
                                </p>
                            </div>
                            <img className="w-44 h-32 bg-gray-900 rounded" src="" alt="" />
                        </div>
                        <div className="flex bg-white  border p-3 rounded">
                            <div className="w-3/4 flex flex-col gap-2">
                                <h4 className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p className="text-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Quibusdam officia, consectetur sed temporibus maxime aut 
                                    amet reprehenderit ipsam fugit, natus commodi similique nulla? 
                                    Recusandae explicabo dicta dolores dignissimos voluptates! 
                                    Suscipit.
                                </p>
                            </div>
                            <img className="w-44 h-32 bg-gray-900 rounded" src="" alt="" />
                        </div>
                        <div className="flex bg-white  border p-3 rounded">
                            <div className="w-3/4 flex flex-col gap-2">
                                <h4 className="font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h4>
                                <p className="text-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                    Quibusdam officia, consectetur sed temporibus maxime aut 
                                    amet reprehenderit ipsam fugit, natus commodi similique nulla? 
                                    Recusandae explicabo dicta dolores dignissimos voluptates! 
                                    Suscipit.
                                </p>
                            </div>
                            <img className="w-44 h-32 bg-gray-900 rounded" src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;