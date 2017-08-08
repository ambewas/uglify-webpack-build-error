
import $ from 'jquery';

import vid1 from '../../assets/video3.mp4';

import '../sass/style.scss';

$(document).ready(() => {
  /**
  |--------------------------------------------------
  | state
  |--------------------------------------------------
  */
  const videoPlayer = document.getElementById('player');
  videoPlayer.setAttribute('src', vid1);
  videoPlayer.play();
})

