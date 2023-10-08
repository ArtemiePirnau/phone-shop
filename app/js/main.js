window.addEventListener("DOMContentLoaded", () => {
  //Darkmode theme
  const options = {
    time: "0.5s",
    mixColor: "#fff",
    backgroundColor: "#17181a",
    buttonColorDark: "#000",
    buttonColorLight: "#fff",
    saveInCookies: false,
    label: "🌓",
    autoMatchOsTheme: true,
  };

  const darkmode = new Darkmode(options);
  darkmode.showWidget();

  $(".sale__slider").slick({
    slidesToShow: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1136,
        settings: {
          slidesToShow: 2,
        }
      }, {
        breakpoint: 822,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  })

  $(".filter__item-drop, .filter__more").on("click", function () {
    $(this).toggleClass("filter__item-drop--active")
    $(this).next().slideToggle("200")
  })
});
