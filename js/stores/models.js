let mongoose = require('mongoose');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: { type: String },
  text: { type: String, required: true },
  color: { type: String },
  createAt: { type: Date }
});

const NewsSchema = new Schema({
  date: { type: Date, required: true },
  header: { type: String },
  text: { type: String }
});

const ToursSchema = new Schema({
  date: { type: Date, required: true },
  header: { type: String },
  text: { type: String }
});

const Note = mongoose.model('Note', NoteSchema);
const News = mongoose.model('News', NewsSchema);
const Tours = mongoose.model('Tours', ToursSchema);

module.exports = {
  Note,
  News,
  Tours
};