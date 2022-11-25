import Level from './Level';
import User from './User';



export default class Game {
    content: HTMLElement = document.querySelector('#content');
    userinput: HTMLInputElement = document.querySelector('#userinput');
    nextButton: HTMLButtonElement = document.querySelector('#next');
    nextButtonLabel: HTMLButtonElement = document.querySelector('#nextLabel');
    languageSelector: HTMLButtonElement = document.querySelectorAll('input[type="radio"][name="language"]');
    level: Level;
    levels: any[] = [];
    maxLevel: number = 1;
    currentLevel: number = 1;
    lang: string = localStorage.getItem('language') ? localStorage.getItem('language') : document.querySelector('input[name="language"]:checked').value;


    constructor() {
        
        let lang = localStorage.getItem('language') ? localStorage.getItem('language') : document.querySelector('input[name="language"]:checked').value;
        document.querySelector(`input[name="language"][value="${lang}"]`).checked = true;

        // handlers
        this.nextButton.addEventListener('click', () => this.nextLevel());
        this.userinput.addEventListener('input', e => this.onInput(e));
        for (var i = 0; i < this.languageSelector.length; i++) {
          this.languageSelector[i].addEventListener('click', e => this.changeLanguage(e));
        }
    }

    addLevel(text: object, users: any[], solutions: boolean[], forbidden: string[] = []) {
        this.levels[this.maxLevel] = {
            number: this.maxLevel,
            text,
            users,
            solutions,
            forbidden,
        };
        this.maxLevel++;
    }

    setLevel(num : number) {
        console.log('Starting ' + num + ' level / ' + this.maxLevel);
        
        // preload level
        let level = this.levels[num];
        let users = level.users.map(e => new User(...e));
        this.level = new Level(level.number, level.text, users, level.solutions, this.maxLevel, level.forbidden, this.lang);

        // save current level
        this.currentLevel = num;
        localStorage.currentLevel = num;

        // initialize
        this.nextButton.classList.add('off');
        this.userinput.value = '';
        this.userinput.focus();
    }

    enableDebug() {
        addEventListener('keydown', e => {
            if ((e.code == 'ArrowUp') && (e.ctrlKey) && (e.altKey))
                this.nextLevel();
            else if ((e.code == 'ArrowDown') && (e.ctrlKey) && (e.altKey))
                this.prevLevel();
        });
    }

    onInput(e) {
        let heads = this.content.querySelectorAll('.user');
        let targets = this.content.querySelectorAll('.target');
        let msg = e.target.value;

        for (var i = 0; i < targets.length; i++) {
            let r;
            try {
                r = RegExp("^" + msg + "$").test(targets[i].textContent);
            }
            catch (e) {
                console.info("Error controlado en Regex (todo bajo control):", r);
            }

            if (r)
                heads[i].classList.add('ok');
            else
                heads[i].classList.remove('ok');
        }

        if (this.level.isCorrect(msg))
            this.nextButton.classList.remove('off');
        else
            this.nextButton.classList.add('off');
    };

    start(num?: number) {
        if (localStorage.endGame)
            return this.endGame();

        let startLevel = num || Number(localStorage.currentLevel) || 1;
        document.querySelector('#info').classList.remove('end');    // fix for development npm debug
        this.setLevel(startLevel);
    }

    prevLevel() {
        if ((this.currentLevel > 1) && (this.currentLevel < this.maxLevel))
            this.setLevel(this.currentLevel-1);
    }

    nextLevel() {
        if (this.userinput.value.length > 0)
            localStorage[`level${this.currentLevel}`] = this.userinput.value.trim();
        if (this.maxLevel-1 == this.currentLevel)
            this.endGame();
        else
            if (this.currentLevel < this.maxLevel)
                this.setLevel(this.currentLevel+1);
    }

    endGame() {
        console.log('end');
        this.currentLevel = this.maxLevel;
        localStorage.endGame = true;
        this.content.innerHTML = '';
        this.nextButton.classList.add('off');
        let info = document.querySelector('#info');
        info.classList.add('end');
        info.innerHTML = `<p><span class="trophy dance">🏆</span>${this.lang == 'es' ? '¡Has terminado el juego!' : (this.lang == 'en' ? 'You have finished the game!' : '')} </p>`;

        let table = document.createElement('table');
        table.classList.add('score');
        for (let i = 0; i < this.maxLevel-1; i++) {
            let sol = localStorage['level'+(i+1)] || '';
            table.innerHTML += `<tr><td>${this.lang == 'es' ? 'Nivel' : (this.lang == 'en' ? 'Level' : '')}  ${i+1}</td><td>${sol}</td></tr>`;
        }
        info.appendChild(table);

        let button = document.createElement('button');
        button.classList.add('brilliant');
        button.textContent = `${this.lang == 'es' ? 'Volver a empezar' : (this.lang == 'en' ? 'Start over!' : '')} `;
        button.addEventListener('click', e => this.resetGame());
        info.appendChild(button);

        document.querySelector('.tags').remove();
    }

    resetGame() {
        localStorage.clear();
        localStorage.removeItem('endGame');
        this.currentLevel = 1;
        window.location.reload();
    }

    changeLanguage(e) {
        // console.log(e)
        this.lang = e.target.value;
        localStorage.setItem('language', this.lang);
        this.setLevel(this.currentLevel);
        this.nextButtonLabel.innerHTML = (this.lang == 'es' ? 'Siguiente': (this.lang == 'en' ? 'Next level' : ''))
    }

}