// page link scroll

$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// nav hover
$(function () {
  $(".nav-list-item").hover(
    function () {
      $(this).addClass("nav-hover");
    },
    function () {
      $(this).removeClass("nav-hover");
    }
  );
});

// .i-links hover
$(function () {
  // when hoverd
  $(".i-links").hover(
    function () {
      // add class
      $(this).addClass("hover");
    },
    function () {
      // remove class
      $(this).removeClass("hover");
    }
  );
});

// .work_container_hover
$(function () {
  $(".work_container").hover(
    function () {
      $(this).addClass("work_container_hover");
    },
    function () {
      $(this).removeClass("work_container_hover");
    }
  );
});
