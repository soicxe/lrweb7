let canv = document.getElementById('canvas');
canv.height = 300;
canv.width = 300;
let ctx = canv.getContext('2d');
let y = x => x * x;
let z = 40;

function CreateGraph() {
	ctx.translate(canv.width / 2, canv.height / 2)
	console.log(canv.height, canv.width)
	ctx.beginPath();
	for (let x = -3; x < 3; x++) {
		ctx.moveTo(x * z, -canv.height / 2);
		ctx.lineTo(x * z, canv.height / 2);
		ctx.moveTo(-canv.width / 2, x * z);
		ctx.lineTo(canv.width / 2, x * z);
	}
	ctx.stroke();
	ctx.closePath();
}

function Graph1() {
	ctx.strokeStyle = "blue";
	ctx.lineWidth = 2;
	ctx.beginPath();
	for (var i = -2; i <= 2; i += 0.2) {
		ctx[i ? 'lineTo' : 'moveTo'](i * z, -y(i) * z);
	}
	ctx.stroke();
}
/*window.addEventListener('load', function () {
	Graph();
})*/