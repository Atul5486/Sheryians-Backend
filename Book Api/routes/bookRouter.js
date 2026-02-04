const express=require('express');
const{addBook,getBooks,getBook,updateBook,deleteBook}=require('../controllers/bookController.js')

const router=express.Router();

router.post('/',addBook);
router.get('/',getBooks);
router.get('/:id',getBook);
router.put('/:id',updateBook);
router.delete('/:id',deleteBook);

module.exports = router;
