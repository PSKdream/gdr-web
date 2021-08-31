  
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let criteriaSchema = new Schema({
    criteria: {
        type: Array
    }
}, {
    collection: 'criteria'
})

module.exports = mongoose.model('criteria', criteriaSchema);