var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookModel = new Schema({
    borough: { type:String },
    cuisine: { type:String },
    grades: {
        score: {type: Number },
        grade: {type: String, Lenght: 1},
        date: {type: Date}
    },
    name: { type:String },
    restaurant_id: { type:String },
    read: { Boolean, default: false },

});

module.exports = mongoose.model('Book', bookModel);