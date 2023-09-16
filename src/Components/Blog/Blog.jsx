/* eslint-disable react/prop-types */
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog,handelAddToBookmark,handelMarkAsRead }) => {

    const {
        id,
        title,
        cover,
        readingTime,
        author,
        authorImg,
        postedDate,
        hashtags} = blog;
    return (
        <div className="mb-20 space-y-4">
            <img className="w-full mb-8" src={cover} alt={`Cover img of ${title}`} />
            <div className="flex justify-between ">
                <div className="flex mb-3">
                    <img className="w-14 border-2 border-indigo-800 rounded-full " src={authorImg} alt={author} />
                    <div className="ml-6 ">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{postedDate}</p>
                    </div>

                </div>
                <div>
                    <span>{readingTime} min read</span>
                    <button 
                        onClick={()=>handelAddToBookmark(blog)}
                       className='ml-2 text-2xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-3">{title}</h2>
            <p>
            {
                hashtags.map((hash,idx) => <span key={idx} className="text-purple-400"> <a href="">#{hash}</a></span>)
            }
            </p>
            <button 
            onClick={()=>handelMarkAsRead(id,readingTime)}
            className='text-purple-800 font-bold underline'>Mark as read</button>
        </div>
    );
};


export default Blog;