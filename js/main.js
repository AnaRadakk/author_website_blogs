$('.komentar').on('click', function(){
  $('.message').toggle(1000);
});

$('.author').on('click', function(){
  $('.autor').toggle(1000);

});


$('.media').on('click', function(){
  $('.mediji').toggle(1000);
});
$('.contact').on('click', function(){
  $('.kontakt').toggle(1000);
});

$(document).ready(function() {
  $("#more").click(function() {
    var more = $("#more").text();
    if (more == "Pročitaj više...") {

      $("#more").text("Pročitaj manje...");
      $("#text").slideDown();
    } else {

      $("#more").text("Pročitaj više...");
      $("#text").slideUp();
    }
  });
});
