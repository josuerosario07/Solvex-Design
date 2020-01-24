var rellax = new Rellax(".rellax");

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 200) {
    $(".navbar").addClass("new-nav");
  } else {
    $(".navbar").removeClass("new-nav");
  }
});

$(document).ready(function() {
  var $magic = $(".magic"),
    magicWHalf = $magic.width() / 2;
  $(document).on("mousemove", function(e) {
    if (!e.target.classList.contains("alfa")) {
      $magic[0].style.display = "none";
    } else {
      $magic[0].style.display = "block";
    }
    $magic.css({ left: e.pageX - magicWHalf, top: e.pageY - magicWHalf });
  });
});
