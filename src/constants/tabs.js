const book = require('src/assets/icons/book.png');
const bookActive = require('src/assets/icons/bookActive.png');
const home = require('src/assets/icons/home.png');
const homeActive = require('src/assets/icons/homeActive.png');
const moon = require('src/assets/icons/moon.png');
const moonActive = require('src/assets/icons/moonActive.png');
const music = require('src/assets/icons/music.png');
const musicActive = require('src/assets/icons/musicActive.png');
const tracker = require('src/assets/icons/tracker.png');
const trackerActive = require('src/assets/icons/trackerActive.png');

export default () => [
  {
    name: 'Home',
    icon: home,
    iconActive: homeActive,
  },
  {
    name: 'Journal',
    icon: book,
    iconActive: bookActive,
  },
  {
    name: 'Program',
    icon: moon,
    iconActive: moonActive,
  },
  {
    name: 'Media',
    icon: music,
    iconActive: musicActive,
  },
  {
    name: 'Tracker',
    icon: tracker,
    iconActive: trackerActive,
  },
];
