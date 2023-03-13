import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// var throttle = require('lodash.throttle');

// const iframe = document.querySelector('iframe');
// const player = new Player(iframe);

// function timeUpdateFunc(time) {
//   console.log(time);
//   localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
// }

// player.on('timeupdate', throttle(timeUpdateFunc, 1200));

// const saveTime = localStorage.getItem('videoplayer-current-time');
// const timeStop = JSON.parse(saveTime);
// player.setCurrentTime(timeStop.seconds || 0);

const CURRENT_TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(event) {
  let seconds = event.seconds;

  localStorage.setItem(CURRENT_TIME_KEY, seconds);
}

const currentVideoTime = localStorage.getItem(CURRENT_TIME_KEY);

if (currentVideoTime) {
  player.setCurrentTime(currentVideoTime);
}
