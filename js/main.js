var rellax = new Rellax(".rellax");

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 5) {
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

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 5
      }
    }
  });
});

$(function() {
  var cube = new Cube({
    cubeWrapperSelector: ".CubeWrapper",
    transitionTime: 300
  });
});
