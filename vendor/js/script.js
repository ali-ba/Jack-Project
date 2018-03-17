var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 5 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';



  $('.names').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}


$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;



});

moveBackground();

$('.names li:nth-child(1) a').mouseover(function() {
  $('body').addClass('bg-01');
});

$('.names li:nth-child(1) a').mouseout(function() {
  $('body').removeClass('bg-01');
});

//-------------------------------------------------//

$('.names li:nth-child(2) a').mouseover(function() {
  $('body').addClass('bg-02');
});

$('.names li:nth-child(2) a').mouseout(function() {
  $('body').removeClass('bg-02');
});

//-------------------------------------------------//

$('.names li:nth-child(3) a').mouseover(function() {
  $('body').addClass('bg-03');
});

$('.names li:nth-child(3) a').mouseout(function() {
  $('body').removeClass('bg-03');
});

//-------------------------------------------------//

$('.names li:nth-child(4) a').mouseover(function() {
  $('body').addClass('bg-04');
});

$('.names li:nth-child(4) a').mouseout(function() {
  $('body').removeClass('bg-04');
});

//-------------------------------------------------//

$('.names li:nth-child(5) a').mouseover(function() {
  $('body').addClass('bg-05');
});

$('.names li:nth-child(5) a').mouseout(function() {
  $('body').removeClass('bg-05');
});
