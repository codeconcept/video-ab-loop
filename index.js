'use strict';
    const vid = document.querySelector('#vid');
    const time = document.querySelector('#time');
    const A = document.querySelector('#A');
    const B = document.querySelector('#B');
    const reset = document.querySelector('#reset');
    const spanA = document.querySelector('#spanA');
    const spanB = document.querySelector('#spanB');
    const spanLoop = document.querySelector('#loop');
    const playPausePoints = {
      A: -1,
      B: -1
    };
    vid.addEventListener('timeupdate', function (event) {
      time.innerHTML = formatTime(vid.currentTime.toFixed(2));
      if (playPausePoints.B !== -1 && (vid.currentTime > playPausePoints.B)) {
        console.log('back');
        vid.currentTime = playPausePoints.A;
      }
    });

    A.addEventListener('click', function () {
      playPausePoints.A = vid.currentTime.toFixed(2);
      spanA.innerHTML = formatTime(vid.currentTime.toFixed(2));
    });
    B.addEventListener('click', function () {
      playPausePoints.B = vid.currentTime.toFixed(2);
      spanB.innerHTML = formatTime(vid.currentTime.toFixed(2));
      vid.currentTime = playPausePoints.A;
      spanLoop.style.display = 'block';
      vid.controls = false;
    });
    reset.addEventListener('click', function () {
      playPausePoints.A = -1;
      playPausePoints.B = -1;
      spanLoop.style.display = 'none';
      spanA.innerHTML = '--';
      spanB.innerHTML = '--';
      vid.controls = true;
    });

    function formatTime(time) {
      let nbMinutes = Math.floor(time / 60);
      let nbSecondes = Math.floor(time % 60);
      nbMinutes = nbMinutes >=10 ? nbMinutes : '0' + nbMinutes;
      nbSecondes = nbSecondes >= 10 ? nbSecondes : '0' + nbSecondes;
      return `${nbMinutes}:${nbSecondes}`;
    }