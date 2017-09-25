(function() {

  // https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
  function scrollIt(destination, duration, callback) {

    if(duration == null){
      duration = 200;
    };

    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);

    if ('requestAnimationFrame' in window === false) {
      window.scroll(0, destinationOffsetToScroll);
      if (callback) {
        callback();
      }
      return;
    }

    function scroll() {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, ((now - startTime) / duration));
      const timeFunction =   easeIt(time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback)
          callback();
        return;
      }

      requestAnimationFrame(scroll);
    }

    function easeIt(time) {
      return (time < 0.5) ? (2 * time * time) : (-1 + (4 - 2 * time) * time);
    }

    scroll();
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

  // // Ready
  document.addEventListener("DOMContentLoaded", function(){

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

    // Track scrolling
    window.addEventListener('scroll', function(e) {
      if (!animated && isInViewport(firstLottie)) {
        animated = true;
        for (i = 0; i < lotties.length; i++) animateLottie(i);
      }
    });
  });

    // Interest button click and scoll
  document.querySelector('.fg-interested').addEventListener('click', function() {
      scrollIt(document.getElementById('sign-up').offsetTop - 120, 1000);
    }
  );
});
