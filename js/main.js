$('#ksawerumolas').prepend('<div id="satukipam-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
$("#satukipam-icon").on("click", function(){
$("nav").slideToggle();
$(this).toggleClass("active");
});




var box = $('#box');
$('button').on('click', function () {
  if (box.hasClass('hidden')) {
    box.removeClass('hidden');
    setTimeout(function () {
      box.removeClass('visuallyhidden');
    }, 20);
  } else {
    box.addClass('visuallyhidden');
    box.one('transitionend', function(e) {
      box.addClass('hidden');
    });
  }
});


// $( document ).ready(function(){
//     $( "div" ).hover(function(){ // задаем функцию при наведении курсора на элемент	
//       $( "div" ).css( "background", "green" ) // задаем цвет заднего фона
//               .text("Курсор на элементе"); // задаем текстовое содержимое
//       }, function(){ // задаем функцию, которая срабатывает, когда указатель выходит из элемента 	
//       $( "div" ).css( "background", "red" ) // задаем цвет заднего фона
//               .text("Курсор вышел из элемента"); // задаем текстовое содержимое
//     });
//   });
