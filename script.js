/*function CreateGraph() {
	let y = x => x * x; // функция
	let z = 40; // масштаб
	let c = document.querySelector('canvas');
	let ctx = c.getContext('2d');

	// центровочка
	ctx.translate(c.width / 2, c.height / 2)
	ctx.beginPath();
	for (let x = -3; x < 3; x++) {
		ctx.moveTo(x * z, -c.height / 2);
		ctx.lineTo(x * z, c.height / 2);
		ctx.moveTo(-c.width / 2, x * z);
		ctx.lineTo(c.width / 2, x * z);
	}
	ctx.stroke();
	// график функции
	document.getElementById('step').onclick = function () {
		ctx.strokeStyle = "blue";
		ctx.lineWidth = 2;
		ctx.beginPath();
		for (var i = -2; i <= 2; i += 0.2) {
			ctx[i ? 'lineTo' : 'moveTo'](i * z, -y(i) * z);
		}
		ctx.stroke();
	}
}*/
function Graph() {
	var canvas = document.getElementById('canvas');
	var size = 300;
	if (canvas.getContext) {
		var ctx = canvas.getContext('2d');
		ctx.strokeStyle = "white";
		var iter = 0;
		ctx.beginPath();
		ctx.moveTo(size / 2, size/2);
		while (iter < 4) {
            switch (iter) {
				case 0:
					ctx.lineTo(size / 2, 0);
					break;
				case 1:
					ctx.lineTo(size / 2, size);
					break;
				case 2:
					ctx.lineTo(0, size/2);
					break;
				case 3:
					ctx.lineTo(size, size/2);
					break;
				default: break;
			}
			i++;
        }
        for (var i = size/2; i < size; i+=20) {
			ctx.moveTo(0, i);
			ctx.lineTo(size, i);
			ctx.stroke();
			ctx.closePath();
        }
	}
	else {
		alert("Your browser doesn't support canvas");
	}
}