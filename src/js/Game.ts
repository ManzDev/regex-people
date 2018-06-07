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

    addLevel(text: string, users: any[], solutions: boolean[], forbidden: string[] = []) {
        this.levels[this.maxLevel] = {
            number: this.maxLevel,
            text,
            users,
            solutions,
            forbidden,
        };
        this.maxLevel++;
    }

    setLevel(num) {
        let level = this.levels[num];
        let users = level.users.map(e => new User(...e));
        this.currentLevel = num;        
        this.level = new Level(level.number, level.text, users, level.solutions, this.maxLevel, level.forbidden);
        this.nextButton.classList.add('off');
        this.userinput.value = '';        
        this.userinput.focus();        
    }

    onInput(e) {
        //console.log('onInput');

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

    start(num = 1) {
        this.setLevel(num);
    }

    nextLevel() {
        console.info(this.currentLevel + '/' +  this.maxLevel);
        if (this.maxLevel-1 == this.currentLevel)
            this.endGame();
        else 
            this.setLevel(this.currentLevel+1);
    }

    endGame() {
        console.log('end');
        this.nextButton.remove();
        let info = document.querySelector('#info');
        info.classList.add('end');
        info.innerHTML = `<p>🏆 You're RegEx GOD!</p>`;
        document.querySelector('.tags').remove();
    }

}