$(document).ready(function() {
  var prevS = $(".slide").length;
  var currS = 1;
  var nextS = 2;
  var trigger = false;

  // Setting up location of slides and text
  $(".slide").css("top", "-100%");
  $(".s" + currS).css("top", "0px");
  $(".s" + prevS).css("top", "100%");

  if ($(window).innerWidth() > 800) {
    $(".desc").css("bottom", "-100%");
    $(".d" + currS).css("bottom", "0px");
    $(".d" + prevS).css("bottom", "100%");
  } else {
    $(".desc").css("top", "100%");
    $(".d" + currS).css("top", "0px");
    $(".d" + prevS).css("top", "-100%");
  }

  // Making the card responsive
  $(window).resize(function() {
    if ($(window).innerWidth() > 800) {
      $(".desc").css("top", "auto");
      $(".desc").css("bottom", "-100%");
      $(".d" + currS).css("bottom", "0px");
      $(".d" + prevS).css("bottom", "100%");
    } else {
      $(".desc").css("bottom", "auto");
      $(".desc").css("top", "100%");
      $(".d" + currS).css("top", "0px");
      $(".d" + prevS).css("top", "-100%");
    }
  });

  // Click event handlers
  $("#prevSlide").click(function() {
    if (!trigger) {
      trigger = true;

      // Transition for scrolling up
      $(".s" + prevS).css("top", "100%");
      $(".s" + currS).animate({ top: "-100%" });
      $(".s" + prevS).animate({ top: "0px" });
      $(".s" + nextS).css("top", "100%");

      if ($(window).innerWidth() > 800) {
        $(".d" + prevS).css("bottom", "100%");
        $(".d" + currS).animate({ bottom: "-100%" });
        $(".d" + prevS).animate({ bottom: "0px" });
        $(".d" + nextS).css("bottom", "-100%");
      } else {
        $(".d" + prevS).css("top", "100%");
        $(".d" + currS).animate({ top: "-100%" });
        $(".d" + prevS).animate({ top: "0px" });
        $(".d" + nextS).css("top", "-100%");
      }

      currS--;
      prevS--;
      nextS--;
      if (currS < 1) currS = $(".slide").length;
      if (prevS < 1) prevS = $(".slide").length;
      if (nextS < 1) nextS = $(".slide").length;

      setTimeout(function() { trigger = false; }, 1000);
    }
  });

  $("#nextSlide").click(function() {
    if (!trigger) {
      trigger = true;

      // Transition for scrolling down
      $(".s" + nextS).css("top", "-100%");
      $(".s" + currS).animate({ top: "100%" });
      $(".s" + prevS).css("top", "-100%");
      $(".s" + nextS).animate({ top: "0px" });

      if ($(window).innerWidth() > 800) {
        $(".d" + prevS).css("bottom", "100%");
        $(".d" + currS).animate({ bottom: "100%" });
        $(".d" + prevS).css("bottom", "-100%");
        $(".d" + nextS).animate({ bottom: "0px" });
      } else {
        $(".desc").css("z-index", "400");
        $(".d" + nextS).css("top", "-100%");
        $(".d" + currS).animate({ top: "100%" });
        $(".d" + prevS).css("top", "-100%");
        $(".d" + nextS).animate({ top: "0px" });
        $(".d" + nextS).css("z-index", "5000");
        $(".d" + currS).css("z-index", "5000");
      }

      currS++;
      prevS++;
      nextS++;
      if (currS > $(".slide").length) currS = 1;
      if (prevS > $(".slide").length) prevS = 1;
      if (nextS > $(".slide").length) nextS = 1;

      setTimeout(function() { trigger = false; }, 1000);
    }
  });
});
