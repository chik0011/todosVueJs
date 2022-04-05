const mongoose = require('mongoose');

const schema = new mongoose.Schema({ 
    description: {type: String},
    done: {type: Boolean} 
});
const Todo = mongoose.model('Todo', schema);

module.exports = Todo; 