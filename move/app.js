var main = function() {
  var cities = [
    'Lisbon',
    'Prague',
    'Bratislava',
    'Viena',
    'Berlin',
    'Oslo',
    'Stockholm',
    'Brussels',
    'New York',
    'Los Angeles',
    'Barcelona',
    'Madrid',
    'Paris',
    'London',
    'Viseu',
    'Rio de Janeiro',
    'Roma',
    'Milan',
    'Amesterdam',
    'Helsinky',
    'Moscow',
    'Tokyo',
    'Beyjing',
    'Hong Kong',
    'Venice',
    'Boston'
  ];
  
  $('#findyourcity').autocomplete({
    source: cities
  });
};
 
$(document).ready(main);