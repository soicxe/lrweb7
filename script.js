function isEmpty(str) {
	if (str.trim() == '') {
		return true;
	}
	return false;
}
function anim() {
	document.getElementById("circle").animate(
		[
			{ transform: "translateY(0) translateX(0)" },
			{ transform: "translateY(-50px) translateX(50px)" }
		],
		{
			easing: "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
			duration: 150,
			direction: "alternate",
			iterations: 4
		}
	)
}
function answer() {
	if (isEmpty(document.getElementById("question").value)) {
		alert("To get an answer enter a question");
		return;
	}
	anim();
	let rand = Math.floor(Math.random() * 4);
	switch (rand) {
		case 0:
			document.getElementById("pp").textContent = "no";
			break;
		case 1:
			document.getElementById("pp").textContent = "yes";
			break;
		case 2:
			document.getElementById("pp").textContent = "maybe";
			break;
	}
}