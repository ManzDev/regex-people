import User from './User';
import { isEqual } from 'lodash';
import snarkdown from 'snarkdown';

export default class Level {
    content: HTMLElement = document.querySelector('#content');
    message: HTMLElement = document.querySelector('#info p');
    solution: boolean[];

    constructor(num: number, text: string, users: User[], solution: boolean[]) {
        this.clear();
        let md = snarkdown(text);
        this.message.innerHTML = `<strong>Ejercicio ${num}</strong>: ${md}`;
        users.forEach(e => this.content.appendChild(e.toNode()));
        this.solution = solution;        
    }

    clear() {
        this.content.innerHTML = '';
    }

    isCorrect() {
        let tried = [];
        let users = this.content.querySelectorAll('.user');
        for (let i = 0; i < users.length; i++)
            tried[i] = users[i].classList.contains('ok');
        
        return (isEqual(tried, this.solution));
    }

}