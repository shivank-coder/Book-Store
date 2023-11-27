import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Book from './Book';
import './book.css';
const URL="http://localhost:5000/books";

const fectchHandler=async()=>{
    return await axios.get(URL).then((res)=>res.data);
}
function Books() {
    const [books,setbooks]=useState();
    useEffect(()=>{
        fectchHandler().then((data)=>setbooks(data.books));
    },[])
    console.log(books);
  return (
    <div>
    <ul>
        {books &&
         books.map((book,i) =>(
            <li  key={i}>
              <Book  book={book}/>
            </li>
       ) )}
    </ul>
    </div>
  )
}

export default Books
