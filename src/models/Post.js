const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

PostSchema.plugin(mongoosePaginate);
mongoose.model('Post', PostSchema);

