import User from './User';
import { isEqual } from 'lodash';
import snarkdown from 'snarkdown';

export default class Level {
    content: HTMLElement = document.querySelector('#content');
    message: HTMLElement = document.querySelector('#info p');
    forbidden: string[] = [];
    solution: boolean[];

    constructor(num: number, text: string, users: User[], solution: boolean[], max, forbidden = []) {
        this.clear();
        let md = snarkdown(text);
        this.message.innerHTML = `${md} <strong class="nivel">Nivel ${num} / ${max-1}</strong>`;
        users.forEach(e => this.content.appendChild(e.toNode()));
        this.solution = solution;
        this.forbidden = forbidden;
    }

    clear() {
        this.content.innerHTML = '';
    }

    isCorrect(str) {
        let tried = [];
        let users = this.content.querySelectorAll('.user');

        if (this.forbidden.includes('nodot'))
            if (str.includes('.'))
                return false;
        if (this.forbidden.includes('hat'))
            if (!str.includes('^'))
                return false;        

        for (let i = 0; i < users.length; i++)
            tried[i] = users[i].classList.contains('ok');
        
        return (isEqual(tried, this.solution));
    }

}