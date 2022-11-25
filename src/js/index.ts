import Game from './Game';

let game = new Game();

game.addLevel(
	{
		es: 'Con las **expresiones regulares**, podemos utilizar `.` (*un punto*) como un comodín que simboliza un carácter cualquiera (**¡sólo uno!**), de modo que si escribes dos puntos simboliza una palabra con dos 2 carácteres. ¿Cómo representarías, por ejemplo, un DNI (que está formado por 8 dígitos + 1 letra)?', 
		en: 'With **regular expressions**, we can use `.` (*a period*) as a wildcard symbolizing any character (**only one!**), so if you type a colon it symbolizes a word with two 2 characters. How would you represent, for example, a ID (which is made up of 8 digits + 1 letter)?'
	}, 
	[['74921132A', []]],
	[true]
);

game.addLevel(
	{ 
		es: `Sin embargo, esto es sólo un ejemplo inicial y no tiene demasiado sentido. Vamos con algo más útil... Si nos fijamos en su primer carácter ¿Cómo podríamos seleccionar **sólo** el personaje feliz?`, 
		en: `However, this is just an initial example and doesn't make much sense. Let's get to something more useful... If we look at your first character, how could we select **only** the happy character?`
	},
	[
		['74921132A', []], 
		['84921132A', ['happymouth', 'dance']]
	],
	[false, true]
);

game.addLevel(
	{
		es: 'Ahora buscamos seleccionar los dos personajes que se encuentran **en movimiento**. ¡Recuerda primero buscar el patrón de similitud con los candidatos y las diferencias con los que queremos descartar!',
		en: `Now we seek to select the two characters that are **in motion**. Remember to first look for the pattern of similarity with the candidates and differences with the ones we want to rule out!`
	},
	[
		['74921132A', ['dance']],
		['84921133C', ['sadmouth']],
		['84921132A', ['happymouth', 'dance']]
	],
	[true, false, true]
);

game.addLevel(
	{
		es: 'Pero utilizar varios puntos es engorroso e incómodo. A partir de ahora, vamos a intentar evitarlo. Si escribimos `7+` simboliza el **7** repetido muchas veces (**1 o más veces**). Intenta seleccionar el último personaje...',
		en: 'But using multiple points is cumbersome and cumbersome. From now on, we will try to avoid it. If we write `7+` it symbolizes the **7** repeated many times (**1 or more times**). Try to select the last character...'
	},
	[
		['74921132A', []],
		['84921133C', ['sadmouth']],
		['84921132A', ['happymouth']],
		['77777777A', ['black', 'brows', 'smileteeth', 'dance']]
	],
	[false, false, false, true],
	['nodot']
);

game.addLevel(
	{
		es: 'Ahora vamos a seleccionar todos los personajes salvo el que está asustado. Recordemos: `+` indica que se repite **1 o más veces** el carácter que lo precede (*que también puede ser parte de una expresión regular*). Además, el `*` indicar que se repite **0 o más veces** el carácter que lo precede. No uses varios puntos.',
		en: 'Now we are going to select all the characters except the one that is scared. Remember: `+` indicates that the preceding character is repeated **1 or more times** (*which can also be part of a regular expression*). Also, the `*` indicates that the preceding character is repeated **0 or more times**. Don\'t use multiple points.'
	},
	[
		['74921132A', ['dance']],
		['84921133C', ['angrymouth']],
		['84921132A', ['happymouth', 'dance']],
		['77777777A', ['black', 'brows', 'smileteeth', 'dance']]
	],
	[true, false, true, true],
	['<4', 'nodots']
);

game.addLevel(
	{ 
		es: 'Al usar `.` permitimos cualquier carácter (*sea número, letra, símbolo...*), por lo que no concretamos. En lugar de esto, nos interesa especificar un rango de carácteres específico. En lugar de `.` usaremos `[0-9]` (*cualquier dígito del 0 al 9*). Intenta ahora seleccionar sólo los personajes de tez clara.',
		en: 'When using `.` we allow any character (*be it number, letter, symbol...*), so we don\'t specify. Instead, we are interested in specifying a specific range of characters. Instead of `.` we will use `[0-9]` (*any digit from 0 to 9*). Now try to select only the fair skinned characters.'
	},
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
	{
		es: 'Vale, pongámoslo un poco más difícil... Selecciona ahora a los tres personajes que no son orcos verdes. Quizás tengas que crear rangos `[0-9]` que no sean sólo de números... ¡Recuerda que los puntos ya no están permitidos!',
		en: 'Okay, let\'s make it a bit more difficult... Now select the three non-green orc characters. You may have to create ranges `[0-9]` that are not just numbers... Remember that periods are no longer allowed!'
	},
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
	{
		es: 'Modifiquemos un poco los personajes. Ahora hay tanto minúsculas como mayúsculas. Si queremos incluir varios rangos, podemos hacerlo así: `[A-Za-z]`, aunque también podemos incluir carácteres concretos sueltos: `[AHz]` (*Se acepta la letra A, la letra H y la letra z*).',
		en: 'Let\'s modify the characters a bit. Now there are both lowercase and uppercase. If we want to include several ranges, we can do it like this: `[A-Za-z]`, although we can also include single concrete characters: `[AHz]` (*The letter A, the letter H and the letter z are accepted*) .'
	},
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
	{ 
		es: 'También se le puede dar la vuelta a las expresiones regulares; En lugar de seleccionar los que cumplen un criterio, seleccionar los que no lo cumplen. Los rangos que tienen un circunflejo `^` en el interior de los corchetes (`[^A]`) simbolizan que no exista ese carácter o rango. Observa que los orcos siempre tienen un guión en su DNI. **Nota**: En el interior de los corchetes, si quieres indicar un guión explícitamente debe estar en la última posición, ya que sino se confundirá con el intervalo para indicar rangos.',
		en: 'You can also reverse regular expressions; Instead of selecting those that meet a criteria, select those that do not. Ranges that have a circumflex `^` inside the square brackets (`[^A]`) symbolize that that character or range does not exist. Note that orcs always have a dash on their ID. **Note**: Inside the brackets, if you want to explicitly indicate a hyphen it must be in the last position, otherwise it will be confused with the interval to indicate ranges.'
	},
	[
		['J-429112C', ['orc', 'smileteeth']],		
		['28395728a', ['black', 'beard', 'smile', 'dance']],
		['83713611H', ['black', 'beard', 'angrymouth', 'dance']],
		['7-381234A', ['orc', 'fangs', 'angrymouth']],
		['L-382271c', ['orc', 'brows', 'fangs', 'angrymouth']]
	],
	[false, true, true, false, false],
	['hat', '<6']
);

game.addLevel(
	{
		es: 'El formato de DNI de los orcos verdes es **Letra-Guión-6Números-Letra**, vamos a intentar concretar más. En lugar de usar `[0-9]+` (*1 o más repeticiones de un dígito del 0 al 9*), podemos utilizar `[0-9]{2}` (*2 repeticiones de un dígito del 0 al 9*). Con esto podemos especificar el número de veces que se repite un carácter.',
		en: 'The ID format of the green orcs is **Letter-Script-6Numbers-Letter**, we are going to try to specify more. Instead of using `[0-9]+` (*1 or more occurrences of a digit from 0 to 9*), we can use `[0-9]{2}` (*2 occurrences of a digit from 0 to 9*). With this we can specify the number of times a character is repeated.'
	},
	[
		['74921132A', ['happymouth']],
		['J-429112C', ['orc', 'fangs', 'angrymouth', 'dance']],
		['84921133C', ['black', 'smile']],
		['84921132A', ['smile']],
		['H-381234A', ['orc', 'brows', 'fangs', 'angrymouth', 'dance']]
	],
	[false, true, false, false, true],
	['nodot', 'curly']
);

// Level 11

game.addLevel(
	{
		es: 'La cosa se comienza a complicar. Los orcos verdes más viejos tienen un DNI más pequeño, ya que al principio tenían menos cifras. Con `{2,4}` podemos indicar que el carácter anterior debe tener una longitud **de 2 a 4 carácteres**. También se pueden usar `{2,}` para indicar **2 o más**.',
		en: 'Things are starting to get complicated. Older green orcs have a smaller ID, since they initially had fewer numbers. With `{2,4}` we can indicate that the previous character must be **2 to 4 characters long**. You can also use `{2,}` to indicate **2 or more**.'
	},
	[
		['K-882132U', ['orc', 'smileteeth']],
		['J-44392C', ['oldorc', 'fangs', 'angrymouth', 'dance']],
		['H-728a', ['oldorc', 'smileteeth', 'dance']],
		['H-281711A', ['orc', 'brows', 'angrymouth']],
		['H-3812A', ['oldorc', 'brows', 'smileteeth', 'dance']]
	],
	[false, true, true, false, true],
	['nodot', 'curly']
);

game.addLevel(
	{
		es: 'Los payasos tienen un DNI especial similar al de los orcos verdes. En lugar de un **guión**, tienen un signo **+** (*más*). En las expresiones regulares podemos hacer uso del símbolo `|` para establecer alternativas. Por ejemplo, `(A|B)` significa **A** o **B**. ¡**Ojo**! Algunos carácteres (`+`, `*`, `(`, ...) hay que precederlos de una barra invertida (ej: `\\+`) para no interpretarlos como una expresión regular.',
		en: 'Clowns have a special ID similar to that of the green orcs. Instead of a **hyphen**, they have a **+** (*plus*) sign. In regular expressions we can make use of the symbol `|` to establish alternatives. For example, `(A|B)` means **A** or **B**. **Eye**! Some characters (`+`, `*`, `(`, ...) must be preceded by a backslash (eg: `\\+`) so as not to interpret them as a regular expression.'
	},
	[
		['K+937212W', ['clown', 'smileteeth', 'dance']],
		['43244392T', ['angrymouth']],
		['H+421728a', ['clown', 'smileteeth', 'dance']],
		['H-837199R', ['orc', 'brows', 'angrymouth', 'dance']],
		['H+343421A', ['clown', 'brows', 'smileteeth', 'dance']]
	],
	[true, false, true, true, true],
	['nodot', 'curly', 'pipe']
);

game.addLevel(
	{
		es: 'En algunos casos queremos indicar que el caracter anterior es **opcional**: puede existir o puede que no, y ambas opciones son correctas. Para ello, utilizaremos el símbolo `?`. Los fantasmas tienen un sistema de DNI muy complejo. Cuando han cumplido su tarea en la *no-vida*, se les asigna una letra en la **tercera posición**. Si aún tienen tareas pendientes, carecen de ella.',
		en: 'In some cases we want to indicate that the preceding character is **optional**: it may or may not exist, and both options are correct. To do this, we will use the symbol `?`. Ghosts have a very complex ID system. When they have fulfilled their task in *unlife*, they are assigned a letter in the **third position**. If they still have tasks to do, they don\'t have it.'
	},
	[
		['28A84721D', ['ghost', 'sadmouth', 'dance']],
		['39H71283L', ['ghost', 'sadmouth', 'dance']],
		['84118321a', ['angrymouth']],
		['39N83726D', ['ghost', 'sadmouth', 'dance']],
		['1762312D', ['ghost', 'brows', 'sadmouth', 'dance']]
	],
	[true, true, false, true, true],
	['nodot', 'curly', 'question']
);

game.addLevel(
	{
		es: '¿Y si quisieramos seleccionar sólo a los orcos que se hacen pasar por fantasmas? Sabremos cuales son porque han falsificado un DNI con menos números porque no saben contar...',
		en: 'What if we wanted to select only the orcs that are posing as ghosts? We will know which they are because they have falsified an ID with fewer numbers because they don\'t know how to count...'
	},
	[
		['28A84721D', ['ghost', 'sadmouth']],
		['39783L', ['ghost', 'angrymouth', 'fangs', 'dance']],
		['84118321a', ['angrymouth']],
		['39N8D', ['ghost', 'brows', 'fangs', 'angrymouth', 'dance']],
		['1762312D', ['ghost', 'brows', 'sadmouth']]
	],
	[false, true, false, true, false],
	['nodot', 'curly', 'question']
);

game.addLevel(
	{ 
		es: 'Ahora queremos seleccionar sólo payasos y orcos viejos... Puedes usar la parentización `(\+[0-9]|-[A-Z])` para agrupar fragmentos. Ten mucho cuidado con esto, puesto que no es lo mismo `CA|B` (*CA o B*) que `C(A|B)` (*CA o CB*).',
		en: 'Now we want to select only old clowns and orcs... You can use the parenting `(\+[0-9]|-[A-Z])` to group fragments. Be very careful with this, as `CA|B` (*CA or B*) is not the same as `C(A|B)` (*CA or CB*).'
	},
	[
		['H+421728a', ['clown', 'smileteeth', 'dance']],
		['28A84721D', ['ghost', 'sadmouth']],
		['H-837199R', ['orc', 'brows', 'angrymouth']],
		['83713611H', ['black', 'beard', 'angrymouth']],
		['H-3812A', ['oldorc', 'brows', 'smileteeth', 'dance']]
	],
	[true, false, false, false, true],
	['nodot', 'curly']
);

game.enableDebug();
game.start();