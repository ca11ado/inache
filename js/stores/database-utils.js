let mongoose = require('mongoose');

const { Note, NewsTours, News, Tours } = require('./models');

module.exports = {
  setUpConnection() {
    mongoose.Promise = global.Promise;
    mongoose.connect(`mongodb://localhost/myTestDB`);
  },

  createConnection () {
    mongoose.createConnection(`mongodb://localhost/news`);
  },

  closeConnection() {
    mongoose.disconnect();
  },

  listNotes() {
    return Note.find();
  },

  createNote(data) {
    const note = new Note({
      title: data.title,
      text: data.text,
      color: data.color,
      createdAt: new Date()
    });

    return note.save();
  },

  deleteNote(id) {
    return Note.findById(id).remove();
  },

  /** Создать новостную запись **/
  createNewsItem({ header, text, date = Date.now() }) {
    const news = new News({
      header,
      text,
      date
    });

    return news.save();
  },

  listNews () {
    return News.find();
  },

  /**
   * Создать запись Афиши
   * @param {String} header
   * @param {String} text
   * @param {Date} date
   * @returns {Promise|*}
   */
  createToursItem({ header, text, date = Date.now() }) {
    const tours = new Tours({
      header,
      text,
      date
    });

    return tours.save();
  },

  listTours () {
    return Tours.find();
  },

  deleteNewsTours (id) {
    return NewsTours.findById(id).remove();
  }
};