$(document).ready(function () {

  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});
	// Scroll down slow effect

$(".go_about").click(function() {
     $('html, body').animate({
         scrollTop: $("#about").offset().top
     }, 1350);
 });
$(".go_ingredients").click(function() {
     $('html, body').animate({
         scrollTop: $("#ingredients").offset().top
     }, 1350);
 });