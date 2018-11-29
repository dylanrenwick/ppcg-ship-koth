var wrapper = document.createElement('div');

window.onload = (e) => {
	wrapper.id = 'wrapper';
	document.body.appendChild(wrapper);

	wrapper.setAttribute('style', `
		width: 900px;
		margin: 0 auto;
	`);

	let fightForm = document.createElement('form');
	fightForm.setAttribute('style', `
		padding: 20px;
		border: 1px solid #888;
	`);
	let player1Sel = document.createElement('select');
	let label = document.createElement('label');
	label.text = 'vs';
	let player2Sel = document.createElement('select');
	fightForm.appendChild(player1Sel);
	fightForm.appendChild(label);
	fightForm.appendChild(player2Sel);
	wrapper.appendChild(fightForm);
};
