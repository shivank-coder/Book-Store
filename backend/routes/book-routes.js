const express=require('express');
const router=express.Router();
const Book=require('../models/Book');
const { getAllBooks, addBook, getById, updateBook, deleteBook } = require('../controller/Book-controler');


router.get('/',getAllBooks);
router.post('/',addBook);
router.get('/:id',getById);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook);
module.exports=router;