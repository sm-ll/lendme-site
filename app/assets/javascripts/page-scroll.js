$(document).ready(function() {
  // Interest button click and scoll
  $('.fg-interested').click(function() {
    scrollIt(document.getElementById('sign-up').offsetTop - 120, 1000);
  });

  // https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
  function scrollIt(destination, duration, callback) {

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
      const timeFunction = easeIt(time);
      window.scroll(0, Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start));

      if (window.pageYOffset === destinationOffsetToScroll) {
        if (callback)
          callback();
        return;
      }

      requestAnimationFrame(scroll);
    }

    function easeIt(time){
      return (time < 0.5) ? (2 * time * time) : (-1 + (4 - 2 * time) * time);
    }
    scroll();
  }
});
