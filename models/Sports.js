import mongoose from 'mongoose';

const SportSchema = new mongoose.Schema({
  sport: {
    type: String,
  },
  team: {
    type: String, 
  }
});

module.exports = mongoose.model('Sports', SportSchema);
