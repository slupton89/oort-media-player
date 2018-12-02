require('dotenv').config({ path: '.env' });

module.exports = {
  TMDB_API_URL: process.env.TMDB_API_URL,
  POSTER_URL: 'https://image.tmdb.org/t/p/w500',
};
