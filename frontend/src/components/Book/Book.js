import React from 'react'
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './book.css';
import axios from 'axios';
function Book(props) {
  const history=useNavigate();
    const{_id,name,author,description,price,image}=props.book;
    function deleteHandler ()
    {
       axios.delete(`http://localhost:5000/books/${_id}`).then(res=>res.data).then(()=>history('/books'))
    }
  return (
    <div className='card'>
      <img src={image} alt={name} />
      <article>BY {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs{price} </h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt:'auto'}} >update</Button>
      <Button onClick={deleteHandler}  sx={{mt:'auto'}}>Delete</Button>

    </div>
  )
}

export default Book

