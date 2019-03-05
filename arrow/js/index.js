$(document).ready(function() {
$(".scroll_down_a").click(function() {
     $('html, body').animate({
         scrollTop: $("#services").offset().top
     }, 1500);
 });
$(".go_to_portfolio").click(function() {
     $('html, body').animate({
         scrollTop: $("#portfolio").offset().top
     }, 1500);
 });
$(".go_to_team").click(function() {
     $('html, body').animate({
         scrollTop: $("#team").offset().top
     }, 1500);
 });
$(".go_to_offices").click(function() {
     $('html, body').animate({
         scrollTop: $("#offices").offset().top
     }, 1500);
 });
$(".go_to_clients").click(function() {
     $('html, body').animate({
         scrollTop: $("#clients").offset().top
     }, 1500);
 });
$(".go_to_contact").click(function() {
     $('html, body').animate({
         scrollTop: $("#contact_us").offset().top
     }, 1500);
 });
});

$(document).ready(function(){
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: true
  });
});