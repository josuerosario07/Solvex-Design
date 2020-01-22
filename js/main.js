var rellax = new Rellax(".rellax");

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".navbar").addClass("new-nav");
  } else {
    $(".navbar").removeClass("new-nav");
  }
});
