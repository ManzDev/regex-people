export default class User {
    id: string;
    user: HTMLDivElement;
    options: string[];

    constructor(id: string, options: string[]) {
        this.id = id;
        this.options = options;

        this.user = document.createElement('div');
        this.user.classList.add('user');
        this.user.innerHTML = `<div class="head"></div><div class="target">${id}</div>`;

        this.genHead();
        this.genEyes();
        this.genNose();
        this.genMouth();
        this.genSpecials();
    }

    genHead() {
        let head = this.user.querySelector('.head');

        ['black', 'orc', 'oldorc', 'clown', 'beard'].forEach(e => {
            if (this.options.includes(e))
                head.classList.add(e);
        });         
    }

    genEyes() {
        let eyes = 2;
        let seg = 2 + ~~(Math.random() * 5);
        if (this.options.includes('oneeye')) 
            eyes = 1;

        for (let i = 0; i < eyes; i++)
            this.user.querySelector('.head').innerHTML += `<div class="eye" style="animation-duration:${seg}s"><div class="pupil"></div></div>`;

        if (this.options.includes('brows')) {
            let eye = this.user.querySelectorAll('.eye');
            for (let i = 0; i < eyes; i++)
                eye[i].innerHTML += `<div class="brows"></div>`;
        }   
    }

    genNose() {
        if (this.options.includes('mustache')) 
            this.user.querySelector('.head').innerHTML += `<div class="mustache"></div>`;
    }

    genMouth() {
        
        ['happymouth', 'angrymouth', 'smile', 'smileteeth', 'sadmouth', 'mouth'].forEach(e => {
            if (this.options.includes(e))
                this.user.querySelector('.head').innerHTML += `<div class="${e}"></div>`;
        });

        if (this.options.includes('fangs')) 
            this.user.querySelector('.angrymouth').innerHTML += `<div class="fangs"></div><div class="fangs"></div>`;
    }

    genSpecials() {
        if (this.options.includes('dance'))
            this.user.classList.add('dance');        
    }

    toNode(): HTMLElement {
        return this.user;
    }

}