var main = function() {
$('.more-btn').on('click', function() {
  $(this).next().toggle(200);
  $(this).toggleClass('.more-menu');
})
  
$('.share').on('click', function() {
  $(this).next().toggle(200);
  $(this).toggleClass('.share-menu');
})
  
$('.notification').on('click', function() {
  $(this).next().toggle(200);
  $(this).toggleClass('active');
})
  
};

$(document).ready(main);