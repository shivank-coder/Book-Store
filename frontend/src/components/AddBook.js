import {FormControlLabel,Checkbox, Box,Button,FormLabel, TextField } from '@mui/material'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function AddBook() {
    const history=useNavigate();
    const[input,setinput]=useState({
        name:'',
        description:'',
        price:'',
        author:'',
        image:''

    });
    const[checked,setchecked]=useState(false);
    function handleChange(e)
    {
       setinput((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
       }))
    }

const sendRequest=async()=>{
    await  axios.post("http://localhost:5000/books",{
        name:String(input.name),
        author:String(input.author),
        description:String(input.description),
        pricr:Number(input.price),
        image:String(input.image),
        available:Boolean(checked)

    }).then(res=> res.data);
}




    function handleSubmit(e)
    { console.log(input,checked);
        e.preventDefault();
        sendRequest().then(()=>history('/books'));
        
    }
  return (
    <div>
     <form onSubmit={handleSubmit}>
        <Box display='flex' flexDirection='column' justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf={'center'} marginLeft={'auto'}  marginRight={'auto'} marginTop={10}>
<FormLabel>Name</FormLabel>
<TextField  value={input.name}  onChange={handleChange}  margin='normal' fullWidth variant='outlined' name='name'  />
<FormLabel>Author</FormLabel>
<TextField  value={input.author}  onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author'  />
<FormLabel>Description</FormLabel>
<TextField  value={input.description}  onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description'  />
<FormLabel>Price</FormLabel>
<TextField value={input.price}  onChange={handleChange}  margin='normal' fullWidth variant='outlined' name='Price'  />
<FormLabel>Image</FormLabel>
<TextField value={input.image}  onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image'  />
<FormControlLabel control={<Checkbox checked={checked} onChange={()=>setchecked(!checked)}  />} label="available" />

<Button variant='contained' type='submit'>Add Book</Button>
</Box>
     </form>
    </div>
  )
}

export default AddBook
