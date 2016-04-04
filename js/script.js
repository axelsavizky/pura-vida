$(document).ready(function() {
   $('.buy').hover(function() {
      $('.comming-soon').slideDown();
      $('.buy-text').slideUp();
   },
   function() {
      $('.buy-text').slideDown();
      $('.comming-soon').slideUp();
   }
   );
});
