// Esperamos a que cargue el DOM
addEventListener('DOMContentLoaded', () => {

	let content = document.querySelector('#content');
	let userinput = document.querySelector('#userinput');
	userinput.oninput = function(e) { 
		
		let heads = content.querySelectorAll('.user')
		let targets = content.querySelectorAll('.target');

		for (var i = 0; i < targets.length; i++) {

			let r;
			try {
				r = RegExp("^" + e.target.value + "$").test(targets[i].textContent);
			}
			catch (e) {
				console.error("Error detectado en Regex:", r);
			}
			if (r) 
				heads[i].classList.add('ok');
			else 
				heads[i].classList.remove('ok');

		}
	}

	addUser('55138491T', ['dance']);
	addUser('88193745c', ['smile']);
	addUser('44216634R', ['mustache']);
	addUser('H74AFXF-3', ['angrymouth', 'orc', 'fangs', 'brows']);
	addUser('X2476171F', ['black']);
});

let createDiv = (clase : string) => {
	let div = document.createElement('div');
	div.classList.add(clase);
	return div;
};

let addUser = (text: string, options: string[] = [], tooltip: string = null) => {

	// Head
	let head = createDiv('head');
	if (options.includes('black'))
		head.classList.add('black');
	if (options.includes('orc'))
		head.classList.add('orc');

	// Eyes
	var pupil = createDiv('pupil');
	var eyeL = createDiv('eye');
	eyeL.appendChild(pupil);
	var eyeR = createDiv('eye');
	var pupilR = pupil.cloneNode();
	eyeR.appendChild(pupilR);
	head.appendChild(eyeL);
	head.appendChild(eyeR);

	// Brows
	if (options.includes('brows')) {
		var browL = createDiv('brows')
		var browR = createDiv('brows')
		eyeL.appendChild(browL)
		eyeR.appendChild(browR)	
	}

	// Mustache/nose
	if (options.includes('mustache')) {
		var mustache = createDiv('mustache')
		head.appendChild(mustache)
	}

	// Mouth
	if (options.includes('happymouth'))
		var mouth = createDiv('happymouth')
	else if (options.includes('angrymouth'))
		var mouth = createDiv('angrymouth')
	else if (options.includes('smile'))
		var mouth = createDiv('smile')
	else
		var mouth = createDiv('mouth')

	if (options.includes('fangs')) {
		var fangL = createDiv('fangs')
		var fangR = createDiv('fangs')
		mouth.appendChild(fangL)
		mouth.appendChild(fangR)
	}

	head.appendChild(mouth)

	// User
	var user = createDiv('user');
	if (options.includes('dance'))
		user.classList.add('dance')
	user.appendChild(head)

	var target = createDiv('target')
	target.textContent = text
	user.appendChild(target)

	//if (tooltip)
	//	user.setAttribute('data-tooltip', tooltip)

	content.appendChild(user)
	return user;
}

let clearLevel = () => {
	content.innerHTML = '';
}