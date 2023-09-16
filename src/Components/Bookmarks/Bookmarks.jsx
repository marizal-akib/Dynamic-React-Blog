/* eslint-disable react/prop-types */

import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div>
                <h3 className="text-4xl text-center border-b-4 pb-2 border-white"> Reading Time: { `${readingTime} min` }</h3>
            </div>
          <h2 className="text-3xl pt-3 text-center">Bookmarked Blogs: {bookmarks.length}</h2>  
          {
            bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
          }
        </div>
    );
};

export default Bookmarks;