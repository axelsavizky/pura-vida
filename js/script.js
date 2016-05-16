$(document).ready(function() {
   $('.buy').hover(function() {
      $('.buy-text').html("Proximamente!");
   },
   function() {
      $('.buy-text').html("Comprar");
   });

   $('.buy').click(function(event) {
      event.preventDefault();
   });
});
