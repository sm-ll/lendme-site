// Ready
$(document).ready(function() {

  // Animate lotties
  var lotties = [
    {
      "container": document.getElementById('lottie1'),
      "path": "/js/heart.json"
    },
    {
      "container": document.getElementById('lottie2'),
      "path": "/js/speech.json"
    },
    {
      "container": document.getElementById('lottie3'),
      "path": "/js/thumbsup.json"
    }
  ];

  var firstLottie = lotties[0].container;
  var animated = false;

  // Track scrolling
  window.addEventListener('scroll', function(e) {
    if (!animated && isInViewport(firstLottie)) {
      animated = true;
      for (i = 0; i < lotties.length; i++) animateLottie(i);
    }
  });

  function animateLottie(i) {
    setTimeout(function() {
      bodymovin.loadAnimation({
        container: lotties[i].container,
        path: lotties[i].path,
        renderer: 'svg',
        loop: false,
        autoplay: true
      });
    }, i * 250);
  }

  // https://gist.github.com/jjmu15/8646226
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }
});
