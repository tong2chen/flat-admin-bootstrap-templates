/* autocomplete search */
var countries = [
    { value: 'Andorra', data: 'AD' },
    { value: 'Zimbabwe', data: 'ZZ' }
];

$('#search').autocomplete({
  lookup: countries
});

$(".sidebar-toggle").bind("click", function(e) {
  $("#sidebar").toggleClass("active")
  $("body").toggleClass("__sidebar")
});

$(".navbar-toggle").bind("click", function(e) {
  $("#navbar").toggleClass("active")
  $("body").toggleClass("__navbar")
});

