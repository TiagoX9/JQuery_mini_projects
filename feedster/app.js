var main = function() {
  $('.notification img').on('click', function() {
    $(this).next().toggle();
    $(this).toggleClass('.notification-menu');
  })
  
  $('.post button').on('click', function() {
    $(this).next().toggle();
    $(this).toggleClass('btn-like');
  })
}

$(document).ready(main);