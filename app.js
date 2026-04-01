const express =require('express');

const mongoose = require('mongoose');
const Note = require('./models/Note');
const router = require('./routes/index');
const app =express();
const PORT = process.env.PORT || 3000;



app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));

app.use(express.static('public'));

// Use routes
app.use('/', router);


//DB connection
mongoose.connect('mongodb://127.0.0.1:27017/notesDB').then(()=>{
    console.log('DB connected');
})
.catch((err)=>{
    console.log(err);
});



/* //Home route
app.get('/',async(req,res)=>{

    const notes = await Note.find().sort({_id:-1});
    res.render('index',{notes:notes});
}); */

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});