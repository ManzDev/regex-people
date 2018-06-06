import Level from './Level';
import User from './User';

export default class Game {
    content: HTMLElement = document.querySelector('#content');
    userinput: HTMLInputElement = document.querySelector('#userinput');
    nextButton: HTMLButtonElement = document.querySelector('button.brilliant');
    level: Level;
    levels: any[] = [];
    maxLevel: number = 1;
    currentLevel: number = 1;

    constructor() {
        this.nextButton.addEventListener('click', () => this.nextLevel());
        this.userinput.addEventListener('input', e => this.onInput(e));
    }

    addLevel(text: string, users: any[], solutions: boolean[]) {
        this.levels[this.maxLevel] = {
            number: this.maxLevel,
            text,
            users,
            solutions
        };
        this.maxLevel++;
    }

    setLevel(num) {
        let level = this.levels[num];
        let users = level.users.map(e => new User(...e));
        this.currentLevel = num;        
        this.level = new Level(level.number, level.text, users, level.solutions);
        this.nextButton.classList.add('off');
        this.userinput.value = '';        
        this.userinput.focus();        
    }

    onInput(e) {
        //console.log('onInput');

        let heads = this.content.querySelectorAll('.user');
        let targets = this.content.querySelectorAll('.target');

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

        if (this.level.isCorrect())
            this.nextButton.classList.remove('off');
        else
            this.nextButton.classList.add('off');
    };

    start(num = 1) {
        this.setLevel(num);
    }

    nextLevel() {
        if (this.maxLevel == this.currentLevel)
            console.log('¡Has terminado el juego!');
        else {
            this.currentLevel++;
            this.setLevel(this.currentLevel);
        }
    }

}