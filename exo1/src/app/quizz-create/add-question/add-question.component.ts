import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  f = new FormGroup({
    label: new FormControl('quelles est la capitale de la Belgique?', Validators.required),
    answerA: new FormControl('Brux', Validators.required),
    answerB: new FormControl('Pris', Validators.required),
    answerC: new FormControl('Rome', Validators.required),
    answerD: new FormControl('Buch', Validators.required),
    correctAnswer : new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

}
