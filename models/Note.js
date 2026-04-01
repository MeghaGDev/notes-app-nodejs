const mongoose = require('mongoose');

const notSchema = new mongoose.Schema({
    content :{
        type:String,
        required:true
    }

});


module.exports = mongoose.model('Note',notSchema);