import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


// eslint-disable-next-line react/prop-types
const Blogs = ({handelAddToBookmark ,handelMarkAsRead}) => {

    const [blogs , setBlogs] = useState([]);

    useEffect( () => {
        fetch('blogs.json')
        .then(res =>res.json())
        .then(data => setBlogs(data))

    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog 
                      key={blog.id}
                      blog={blog} 
                      handelAddToBookmark={handelAddToBookmark}
                      handelMarkAsRead={handelMarkAsRead}></Blog>)
            }
        </div>
    );
};

export default Blogs;