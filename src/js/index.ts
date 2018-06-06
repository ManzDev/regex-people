import Game from './Game';

let game = new Game();

game.addLevel(
	'Con las **expresiones regulares**, podemos utilizar `.` (*un punto*) como un comodín que simboliza un carácter cualquiera (**¡sólo uno!**), de modo que si escribes dos puntos simboliza una palabra con dos 2 carácteres. ¿Cómo representarías, por ejemplo, un DNI (que está formado por 8 dígitos + 1 letra)?', 
	[['74921132A', []]],
	[true]
);

game.addLevel(
	'Sin embargo, esto es sólo un ejemplo inicial y no tiene demasiado sentido. Vamos con algo más útil... Si nos fijamos en su primer carácter ¿Cómo podríamos seleccionar **sólo** el personaje feliz?',
	[
		['74921132A', []], 
		['84921132A', ['happymouth', 'dance']]
	],
	[false, true]
);

game.addLevel(
	'Ahora buscamos seleccionar los dos personajes que se encuentran **en movimiento**. ¡Recuerda primero buscar el patrón de similitud con los candidatos y las diferencias con los que queremos descartar!',
	[
		['74921132A', ['dance']],
		['84921133C', ['sadmouth']],
		['84921132A', ['happymouth', 'dance']]
	],
	[true, false, true]
);

game.addLevel(
	'Pero utilizar varios puntos es engorroso e incómodo. Si escribimos `7+` simboliza el **7** repetido muchas veces (**1 o más veces**). Intenta seleccionar el último personaje...',
	[
		['74921132A', []],
		['84921133C', ['sadmouth']],
		['84921132A', ['happymouth']],
		['77777777A', ['black', 'brows', 'smileteeth', 'dance']]
	],
	[false, false, false, true]
);

game.addLevel(
	'Ahora vamos a intentar seleccionar todos los personajes salvo el que está asustado. Recordemos que el `+` indica que se repite 1 o más veces el carácter que lo precede (*que también puede ser parte de una expresión regular*).',
	[
		['74921132A', ['dance']],
		['84921133C', ['sadmouth']],
		['84921132A', ['happymouth', 'dance']],
		['77777777A', ['black', 'brows', 'smileteeth', 'dance']]
	],
	[true, false, true, true]
);

game.addLevel('Crea una expresión regular que acepte cualquier palabra de longitud 9 carácteres',
	[
		['55138491T', ['dance', 'smile']],
		['88193745c', ['beard', 'mouth']],
		['44216634R', ['mustache', 'happymouth']],
		['H74AFXF-3', ['angrymouth', 'orc', 'fangs', 'brows']],
		['X2476171F', ['black', 'mouth']]
	],
	[true, true, true, true, true]
);

game.start(5);