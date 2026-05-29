const start = document.getElementById("start");
const stop = document.getElementById("stop");

const randomColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.ceil(Math.random() * 16)];
  }
  return color;
};

// console.log(randomColor());

const bgChange = function () {
  document.body.style.backgroundColor = randomColor();
};

let intervalID;
start.addEventListener("click", function (e) {
  if (intervalID == null) intervalID = setInterval(bgChange, 700);
});
stop.addEventListener("click", function () {
  clearInterval(intervalID);
  intervalID = null;
});
