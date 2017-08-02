var main = function() {
  $('.cart').on('click', function() {
    $('.cart .dropdown-menu').toggle();
    $('.account .dropdown-menu').hide();
    $('.help .dropdown-menu').hide();
  })
  
    $('.account').on('click', function() {
    $('.account .dropdown-menu').toggle();
    $('.cart .dropdown-menu').hide();
    $('.help .dropdown-menu').hide();
  })
  
    $('.help').on('click', function() {
    $('.help .dropdown-menu').toggle();
    $('.cart .dropdown-menu').hide();
    $('.account .dropdown-menu').hide();
  })
};


$(document).ready(main);