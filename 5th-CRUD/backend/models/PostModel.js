const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: String,
    imageUrl: String,
    description: String,
    postId: String
})

const PostModel = mongoose.model('PostModel', postSchema);


//named ecports 
module.exports = PostModel;