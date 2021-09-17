  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let courseSchema = new Schema({
    course: {
        type: String
    },
    university: {
        type: String
    },
    criteria: {
        type: Array
    },
    detail: {
        type: Object
    }
}, {
    collection: 'course'
})

module.exports = mongoose.model('course', courseSchema);