export default class User {
    id: string;
    user: HTMLElement;
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

        if (this.options.includes('black'))
            head.classList.add('black');

        if (this.options.includes('orc'))
            head.classList.add('orc');

        if (this.options.includes('beard'))
            head.classList.add('beard');            
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
        if (this.options.includes('happymouth'))
            this.user.querySelector('.head').innerHTML += `<div class="happymouth"></div>`;
        else if (this.options.includes('angrymouth'))
            this.user.querySelector('.head').innerHTML += `<div class="angrymouth"></div>`;
        else if (this.options.includes('smile'))
            this.user.querySelector('.head').innerHTML += `<div class="smile"></div>`;
        else if (this.options.includes('smileteeth'))
            this.user.querySelector('.head').innerHTML += `<div class="smileteeth"></div>`;
        else if (this.options.includes('sadmouth'))
            this.user.querySelector('.head').innerHTML += `<div class="sadmouth"></div>`;            
		else if (this.options.includes('mouth'))
            this.user.querySelector('.head').innerHTML += `<div class="mouth"></div>`;

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