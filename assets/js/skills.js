function isScrolledIntoView(elem) {
  var TopViewPort = $(window).scrollTop();
  var BotViewPort = TopViewPort + $(window).height();
  var TopOfElement = $(elem).offset().top;
  var BotOfElement = TopOfElement + $(elem).height();
  return ((BotOfElement <= BotViewPort) && (TopOfElement >= TopViewPort));

}

$(window).scroll(function () {

  $('.animation-about-me').each(function(key, value) {
    var section = 'div.' + $(value).attr('class');
    var sectionName = section + ' > h1';
    var sectionDiv = section + ' > div';
    if (isScrolledIntoView(this) === true) {
      $(sectionName).addClass('animated-section');
      $(sectionDiv).addClass('animated-underline');
    }
  })

  $('.frontend-container, .ecomm-container, .apps-libs-container').each(function() {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('animated-fadeIn-right');
    }
  });

  $('.skills-description').each(function() {
    if (isScrolledIntoView(this) === true) {
      $(this).addClass('animated-fadeIn-left');
    }
  });

  $('#about-me-section').each(function(key, value) {
    if(isScrolledIntoView(this) === true){
      $("a").removeClass('active');
      var activeSection = "a[href='#" + $(value).attr('id') + "']";
      $(activeSection).addClass('active');
    }
  });
});
