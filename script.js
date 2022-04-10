const countDownTimer = () => {
  const countDate = new Date("April 19, 2022 13:40:57").getTime();
  const timeNow = new Date().getTime();
  const gapBetween = countDate - timeNow;

  //How time works in real life
  const seconds = 1000;
  const minuit = seconds * 60;
  const hour = minuit * 60;
  const day = hour * 24;

  //calculating the timer
  const daytime = Math.floor(gapBetween / day);
  const minuitTime = Math.floor((gapBetween % day) / hour);
  const hourTime = Math.floor((gapBetween % hour) / minuit);
  const secondsTime = Math.floor((gapBetween % minuit) / seconds);

  document.querySelector(".day").textContent = daytime;
  document.querySelector(".hour").textContent = minuitTime;
  document.querySelector(".minuits").textContent = hourTime;
  document.querySelector(".seconds").textContent = secondsTime;

  let stopCountDown = setInterval(countDownTimer, 1000);

  if (gapBetween <= 0) {
    clearInterval(stopCountDown);

    const screenSize = window.matchMedia("(max-width: 768px)");
    const changeScreen = (screenSize) => {
      if (screenSize.matches) {
        document.querySelector(".day").style.fontSize = "12px";
        document.querySelector(".day").textContent = "Expired";
        document.querySelector(".hour").style.fontSize = "12px";
        document.querySelector(".hour").textContent = "Expired";
        document.querySelector(".minuits").style.fontSize = "12px";
        document.querySelector(".minuits").textContent = "Expired";
        document.querySelector(".seconds").style.fontSize = "12px";
        document.querySelector(".seconds").textContent = "Expired";
      } else {
        document.querySelector(".day").style.fontSize = "30px";
        document.querySelector(".day").textContent = "Expired";
        document.querySelector(".hour").style.fontSize = "30px";
        document.querySelector(".hour").textContent = "Expired";
        document.querySelector(".minuits").style.fontSize = "30px";
        document.querySelector(".minuits").textContent = "Expired";
        document.querySelector(".seconds").style.fontSize = "30px";
        document.querySelector(".seconds").textContent = "Expired";
      }
    };
    screenSize.addListener(changeScreen);
    changeScreen(screenSize);
  }
};

countDownTimer();
