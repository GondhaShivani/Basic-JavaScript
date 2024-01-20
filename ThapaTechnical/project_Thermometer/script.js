// https://fontawesome.com/v4/cheatsheet/
const tempLoad = () => {
  let temp = document.getElementById("temp");
  temp.innerHTML = "&#xf2cb;";

  setTimeout(() => {
    temp.innerHTML = "&#xf2ca;";
    temp.style.color = "white";
  }, 1000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c9;";
    temp.style.color = "yellow";
  }, 2000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c8;";
    temp.style.color = "orange";
  }, 3000);

  setTimeout(() => {
    temp.innerHTML = "&#xf2c7;";
    temp.style.color = "#e21818";
  }, 4000);
};

tempLoad();

setInterval(tempLoad, 5000);
