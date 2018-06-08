import User from './User';
import { isEqual } from 'lodash';
import snarkdown from 'snarkdown';

export default class Level {
    content: HTMLDivElement = document.querySelector('#content');
    message: HTMLParagraphElement = document.querySelector('#info p');
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

    isCorrect(str : string) {
        let tried = [];
        let users = this.content.querySelectorAll('.user');

        // TODO: Refactor pending...
        if (this.forbidden.includes('nodot'))
            if (str.includes('.'))
                return false;
        if (this.forbidden.includes('nodots'))
            if (str.includes('..'))
                return false;
        if (this.forbidden.includes('noor'))
            if (str.includes('|'))
                return false;
        if (this.forbidden.includes('hat'))
            if (!str.includes('^'))
                return false;
        if (this.forbidden.includes('question'))
            if (!str.includes('?'))
                return false;
        if (this.forbidden.includes('<4'))
            if (str.length > 3)
                return false;
        if (this.forbidden.includes('<6'))
            if (str.length > 5)
                return false;
        if (this.forbidden.includes('curly'))
            if (!str.includes('{'))
                return false;
        if (this.forbidden.includes('pipe'))
            if (!str.includes('|'))
                return false;

        for (let i = 0; i < users.length; i++)
            tried[i] = users[i].classList.contains('ok');
        
        return (isEqual(tried, this.solution));
    }

}