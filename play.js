var wrapper = document.createElement('div');

window.onload = (e) => {
	wrapper.id = 'wrapper';
	document.body.appendChild(wrapper);

	let fightForm = document.createElement('form');
	let player1Sel = document.createElement('select');
	let label = document.createElement('label');
	label.innerText = 'vs';
	let player2Sel = document.createElement('select');
	fightForm.appendChild(player1Sel);
	fightForm.appendChild(label);
	fightForm.appendChild(player2Sel);
	wrapper.appendChild(fightForm);
};
