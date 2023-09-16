import {  useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime , setReadingTime] = useState(0)

  const handelAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    console.log('Bookmark adding', blog);
  }

  const handelMarkAsRead = time =>{
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)

    console.log("marked", time);
  }

  return (
    <>
     
     <Header ></Header>
     <div className='md:flex max-w-7xl mx-auto'>
     <Blogs handelAddToBookmark={handelAddToBookmark}
     handelMarkAsRead={handelMarkAsRead} ></Blogs>
     <Bookmarks readingTime={readingTime} bookmarks={bookmarks} ></Bookmarks>

     </div>

    
    </>
  )
}

export default App
