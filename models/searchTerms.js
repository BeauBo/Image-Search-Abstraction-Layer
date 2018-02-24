const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const searchTermSchema = new Schema({
  term: String,
  when: String
});

const SearchTerms = mongoose.model('searchTerms', searchTermSchema);

module.exports = SearchTerms;
