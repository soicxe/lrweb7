let canv = document.getElementById("canvas");
canv.height = 300;
canv.width = 300;
let ctx = canv.getContext("2d");
ctx.translate(canv.width / 2, canv.height / 2);
let scale = 15;
let click = 0;
let click1 = 0;
let array = [];

function CreateGrid() {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 0.5;
  ctx.beginPath();
  for (
    let x = -(canv.height / 2 / scale - 1);
    x <= canv.height / 2 / scale - 1;
    x++
  ) {
    ctx.moveTo(x * scale, -canv.height / 2);
    ctx.lineTo(x * scale, canv.height / 2);
    ctx.moveTo(-canv.width / 2, x * scale);
    ctx.lineTo(canv.width / 2, x * scale);
  }
  ctx.stroke();
  ctx.closePath();
}

function Graph() {
  click++;
  if (click > 1) {
    ctx.clearRect(-canv.width, -canv.height, canv.width * 2, canv.height * 2);
    CreateGrid();
    array = [];
  }
  let spacing = Math.abs(document.getElementById("formSpacing").value);
  let step = Math.abs(document.getElementById("formStep").value);
  let y = (x) => 4 * Math.pow(x, 3) * Math.pow(Math.pow(x - 1, 2), 0.333);
  ctx.strokeStyle = "brown";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  for (let x = -spacing; x <= spacing; x += 0.1) {
    ctx[x ? "lineTo" : "moveTo"](x * scale, -y(x) * scale);
  }
  ctx.stroke();
  ctx.closePath();
  let i = -spacing;
  do {
    y = 4 * Math.pow(i, 3) * Math.pow(Math.pow(i - 1, 2), 0.333);
    array.push([i, Number(y.toFixed(2))]);
    i += step;
  } while (i <= spacing);
  document.addEventListener("DOMContentLoaded", RefTable);
}

function RefTable() {
  let list = document
    .getElementsByTagName("table")[0]
    .getElementsByTagName("td");
  let k = 0;
  for (let elem of array) {
    for (let elem2 of elem) {
      list[k].innerHTML = elem2;
      k++;
    }
  }
}
