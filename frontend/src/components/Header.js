import React from 'react'
import { useState } from 'react';
import { AppBar, Toolbar, Typography,Tabs,Tab } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom';
function Header() {
  const [value,setvalue]=useState();


  return (
    <div>
      <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky' >
        <Toolbar>
        <Typography>
<LibraryBooksIcon />
</Typography>
<Tabs
sx={{ml:"auto"}}
 textColor='inherit' 
 indicatorColor='secondary'
  value={value} 
  onChange={(e,value)=>setvalue(value)}>
<Tab LinkComponent={NavLink} to="/add" label='Add prodcut' /> 
<Tab   LinkComponent={NavLink} to="/about" label=' About us' /> 
<Tab  LinkComponent={NavLink} to="/books" label='Books' /> 
</Tabs>
</Toolbar>
      </AppBar>

    </div>
  )
}

export default Header
