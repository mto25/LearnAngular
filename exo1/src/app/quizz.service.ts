import { Injectable } from '@angular/core';
import { Quizz } from './quizz';

@Injectable({
  providedIn: 'root'
})
export class QuizzService {

  current = this.getCurrent();

  constructor() {

  }

  getCurrent():Quizz {
    const str = localStorage.getItem('current');
    if (!str) {
      return undefined;
    }
    const q = JSON.parse(str);
    //Object.setPrototypeOf(q,Quizz.prototype);
    q.__proto__ = Quizz.prototype;
    return q;
  }
  setCurrent(q: Quizz) {
    this.current = q;
    localStorage.setItem('current', JSON.stringify(q));
  }
}
