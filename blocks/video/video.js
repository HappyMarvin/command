let play;
function onYouTubePlayerAPIReady() {
  play = new YT.Player('video__frame', {videoId: 'JGNiMutYBm4',});
  document.querySelector('.video__play').onclick = function () {
    play.playVideo();
    document.querySelector('.video__overlay').classList.add('video__hide')
  };
  play.addEventListener("onStateChange", function (state) {
    if (state.data === 2) {
      document.querySelector('.video__overlay').classList.remove('video__hide')
    }
  });
}