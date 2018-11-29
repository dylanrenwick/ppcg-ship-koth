var wrapper = document.createElement('div');

window.onload = (e) => {
	wrapper.id = 'wrapper';
	document.body.appendChild(wrapper);

	let fightForm = document.createElement('form');
	let player1Sel = document.createElement('select');
	let label = document.createElement('label');
	label.innerText = 'vs';
	let player2Sel = document.createElement('select');
	let fightBtn = document.createElement('input');
	fightBtn.setAttribute('type', 'submit');
	fightBtn.value = 'Fight!';
	fightForm.appendChild(player1Sel);
	fightForm.appendChild(label);
	fightForm.appendChild(player2Sel);
	fightForm.appendChild(fightBtn);
	wrapper.appendChild(fightForm);
};
