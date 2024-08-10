
(function () {
  var slidersContainer = document.querySelector(".sliders-container");

  // Initializing the numbers slider
  var msNumbers = new MomentumSlider({
    el: slidersContainer,
    cssClass: "ms--numbers",
    range: [1, 2],
    rangeContent: function (i) {
      return "0" + i;
    },
    style: {
      transform: [{ scale: [0.4, 1] }],
      opacity: [0, 1],
    },
    interactive: false,
  });

  var titles = ["Cartoon", "Anime"];
  var msTitles = new MomentumSlider({
    el: slidersContainer,
    cssClass: "ms--titles",
    range: [0, 1],
    rangeContent: function (i) {
      return "<h3>" + titles[i] + "</h3>";
    },
    vertical: true,
    reverse: true,
    style: {
      opacity: [0, 1],
    },
    interactive: false,
  });

  
  var msLinks = new MomentumSlider({
    el: slidersContainer,
    cssClass: "ms--links",
    range: [0, 1],
    rangeContent: function () {
      return '<a class="ms-slide__link">Watch Now !</a>';
    },
    vertical: true,
    interactive: false,
  });

  function getLinkUrl(index) {
    switch (index) {
      case 0:
        return "Cartoon.html";
      case 1:
        return "Anime.html"; 
      default:
        return "";
    }
  }
  

  
  var pagination = document.querySelector(".pagination");
  var paginationItems = [].slice.call(pagination.children);

  
  var msImages = new MomentumSlider({
    el: slidersContainer,
    cssClass: "ms--images",
    range: [0, 1],
    rangeContent: function () {
      return '<div class="ms-slide__image-container"><div class="ms-slide__image"></div></div>';
    },
    // Syncronize the other sliders
    sync: [msNumbers, msTitles, msLinks],
    // Styles to interpolate as we move the slider
    style: {
      ".ms-slide__image": {
        transform: [{ scale: [1.5, 1] }],
      },
    },
    // Update pagination if slider change
    change: function (newIndex, oldIndex) {
      if (typeof oldIndex !== "undefined") {
        paginationItems[oldIndex].classList.remove("pagination__item--active");
      }
      paginationItems[newIndex].classList.add("pagination__item--active");
    },
  });

  // Select corresponding slider item when a pagination button is clicked
  pagination.addEventListener("click", function (e) {
    if (e.target.matches(".pagination__button")) {
      var index = paginationItems.indexOf(e.target.parentNode);
      msImages.select(index);
    }
  });
})();