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
	'Ahora vamos a seleccionar todos los personajes salvo el que está asustado. Recordemos: `+` indica que se repite **1 o más veces** el carácter que lo precede (*que también puede ser parte de una expresión regular*). Además, el `*` indicar que se repite **0 o más veces** el carácter que lo precede.',
	[
		['74921132A', ['dance']],
		['84921133C', ['angrymouth']],
		['84921132A', ['happymouth', 'dance']],
		['77777777A', ['black', 'brows', 'smileteeth', 'dance']]
	],
	[true, false, true, true]
);

game.addLevel(
	'Al usar `.` permitimos cualquier carácter (*sea número, letra, símbolo...*), por lo que no concretamos. En lugar de esto, nos interesa especificar un rango de carácteres específico. En lugar de `.` usaremos `[0-9]` (*cualquier dígito del 0 al 9*). Intenta ahora seleccionar sólo los personajes de tez clara.',
	[
		['74921132A', ['happymouth', 'dance']],
		['J-429112C', ['orc', 'fangs', 'angrymouth']],		
		['84921133C', ['black', 'smile']],
		['84921132A', ['smile', 'dance']],
		['H-381234A', ['orc', 'brows', 'fangs', 'angrymouth']]
	],
	[true, false, false, true, false],
	['nodot']
);

game.addLevel(
	'Vale, pongámoslo un poco más difícil... Selecciona ahora a los tres personajes que no son orcos verdes. Quizás tengas que crear rangos `[0-9]` que no sean sólo de números... ¡Recuerda que los puntos ya no están permitidos!',
	[
		['74921132A', ['happymouth', 'dance']],
		['J-429112C', ['orc', 'fangs', 'angrymouth']],		
		['84921133C', ['black', 'smile', 'dance']],
		['84921132A', ['smile', 'dance']],
		['H-381234A', ['orc', 'brows', 'fangs', 'angrymouth']]
	],
	[true, false, true, true, false],
	['nodot']
);

game.addLevel(
	'Modifiquemos un poco los DNI de los personajes. Ahora hay tanto minúsculas como mayúsculas. Si queremos incluir varios rangos, podemos hacerlo así: `[A-Za-z]`, aunque también podemos incluir carácteres concretos sueltos: `[AHz]` (*Se acepta la letra A, la letra H y la letra z*).',
	[
		['74921132c', ['happymouth', 'dance']],
		['83811128h', ['angrymouth', 'dance']],
		['84921133W', ['black', 'smile', 'dance']],
		['84921132A', ['smile', 'dance']],
		['89187373H', ['mouth']]
	],
	[true, true, true, true, false],
	['nodot']
);

game.addLevel(
	'También se le puede dar la vuelta a las expresiones regulares; En lugar de seleccionar los que cumplen un criterio, seleccionar los que no lo cumplen. Los rangos que tienen un circunflejo `^` en el interior de los corchetes (`[^A]`) simbolizan que no exista ese carácter o rango. **Nota**: Si quieres indicar un guión explícitamente, debe estar en el último carácter dentro de los corchetes, ya que sino se confundirá con el intervalo del rango.',
	[
		['J-429112C', ['orc', 'smileteeth']],		
		['28395728a', ['black', 'beard', 'smile', 'dance']],
		['H-382712W', ['orc', 'happymouth']],
		['7-381234A', ['orc', 'fangs', 'angrymouth']],
		['L-382271c', ['orc', 'brows', 'fangs', 'angrymouth']]
	],
	[false, true, false, false, false],
	['hat']
);

game.addLevel(
	'Es posible ',
	[
		['74921132A', ['happymouth', 'dance']],
		['J-429112C', ['orc', 'fangs', 'angrymouth']],		
		['84921133C', ['black', 'smile', 'dance']],
		['84921132A', ['smile', 'dance']],
		['H-381234A', ['orc', 'brows', 'fangs', 'angrymouth']]
	],
	[true, false, true, true, false],
	['nodot']
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

game.start(11);