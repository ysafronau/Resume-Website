const root = document.querySelector(":root");
const lightBtn = document.getElementById("light");
const darkBtn = document.getElementById("dark");

function setBgColorLight() {
  root.style.setProperty("--mainTextColor", "#000");
  root.style.setProperty("--secondaryTextColor", "rgb(51 51 51)");
  root.style.setProperty("--mainLinkColor", "#0da2b8");
  root.style.setProperty("--mainBorderColor", "rgb(218, 218, 218)");
  root.style.setProperty("--mainBgColor", "rgb(249, 250, 251)");
}

function setBgColorDark() {
  root.style.setProperty("--mainTextColor", " #fff");
  root.style.setProperty("--secondaryTextColor", "#adb0b1");
  root.style.setProperty("--mainLinkColor", "rgb(30, 190, 214)");
  root.style.setProperty("--mainBorderColor", "#2b3031");
  root.style.setProperty("--mainBgColor", "#131415");
}

lightBtn.addEventListener("click", setBgColorLight);
darkBtn.addEventListener("click", setBgColorDark);
