const express = require('express');
const router =express.Router();
const Note = require('../models/Note');

//Home route
router.get('/',async(req,res)=>{
    const notes = await Note.find().sort({_id:-1});
    res.render('index',{notes:notes});
});

//add note route
router.post('/add', async (req, res) => {
  try {
    if (req.body.content.trim() !== '') {
      await Note.create({ content: req.body.content });
    }
    res.redirect('/');
  } catch (err) {
    res.send('Error adding note');
  }
});


//delete note route
router.post('/delete/:id',async(req,res)=>{

    try{
        await Note.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }catch(err){
        console.log(err);
        res.send('Error occurred while deleting note');
    }

});

module.exports = router;