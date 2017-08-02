var main = function() {
  $('img').on('click',function() {
    $(this).next().toggle();
    $(this).toggleClass('.dropdown-menu');
  })
}
 
$(document).ready(main);