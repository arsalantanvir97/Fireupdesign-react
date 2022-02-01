$(document).ready(function () {
  $(".collection-carousel").owlCarousel({
    loop: true,
    items: 4,
    margin: 10,
    nav: true,
    arrows: true,
    dots: false,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 4,
      },
    },
  });

  $(".client-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    arrows: true,
    dots: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1300: {
        items: 3,
      },
    },
  });
});

try {
  window.addEventListener("load", gridOnload);

  function gridOnload() {

    var grid = document.querySelector('.grid');

    var msnry = new Masonry(grid, {
      // options...
      itemSelector: '.grid-item',
      //columnWidth: '.grid-sizer',
      columnWidth: 160,
      //percentPosition: true

    });


    // init with selector
    var msnry = new Masonry('.grid', {
      gutter: 10,
      //columnWidth: '.grid-sizer',
      // percentPosition: true

    });

  }

} catch (error) {

}




let ddToggler = document.querySelector(".dropdown-container");
var ddTogglerpseudo = CSSRulePlugin.getRule("button.dropdown-toggler:after");
let serviceMenu = document.querySelector(".services_dropDown");
let sManimation = gsap.timeline();
let sManimation2 = gsap.timeline();

if (window.innerWidth > 1000) {
  sManimation.pause();
  sManimation2.pause();
} else {
  sManimation.reverse(-1);
  sManimation.reversed(true);
  sManimation2.reverse(-1);
  sManimation2.reversed(true);
}

sManimation.to(serviceMenu, {
  opacity: 1,
  y: 0
});
sManimation2.to(ddTogglerpseudo, 0.5, {
  cssRule: {
    rotate: 0,
  },
});

ddToggler.addEventListener("mouseenter", function (e) {
  if (window.innerWidth > 1000) {
    sManimation.play();
    sManimation2.play();
  }
});
ddToggler.addEventListener("mouseleave", function (e) {
  if (window.innerWidth > 1000) {
    sManimation.reverse();
    sManimation2.reverse();
  }
});

serviceMenu.addEventListener("mouseenter", function (e) {
  if (window.innerWidth > 1000) {
    sManimation.play();
    sManimation2.play();
  }
});
serviceMenu.addEventListener("mouseleave", function (e) {
  if (window.innerWidth > 1000) {
    sManimation.reverse();
    sManimation2.reverse();
  }
});

// ddToggler.addEventListener("click", function (e) {
//   if (window.innerWidth < 1000) {
//     sManimation.reversed(!sManimation.reversed());
//     sManimation2.reversed(!sManimation2.reversed());
//   }
// });

if (window.innerWidth < 1000) {
  document.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("serviceCard") ||
      e.target.classList.contains("dropdown-toggler")
    ) {
      console.log(e.target.classList);
      sManimation.reversed(!sManimation.reversed());
      sManimation2.reversed(!sManimation2.reversed());
    } else {
      sManimation.reverse();
      sManimation2.reverse();
    }
  });
}

let borgir = document.getElementById("borgir");
let fsm = document.querySelector(".fullscreenMenu");
let body = document.querySelector("body");
let links = document.querySelectorAll(".menu__links");

setTimeout(function () {
  fsm.style.display = "flex";
  fsm.style.top = "0";
}, 200);

Array.from(links).forEach((link) => {
  link.addEventListener("click", function (e) {
    fsm.classList.remove("active");
    // body.classList.remove("overflow-hidden");
    borgir.classList.toggle("active");
  });
});
borgir.addEventListener("click", function () {
  fsm.classList.toggle("active");
  // body.classList.toggle("overflow-hidden");
  borgir.classList.toggle("active");
});

/*
$('.grid').masonry({
  // options...
  itemSelector: '.grid-item',
  columnWidth: 200
});
*/