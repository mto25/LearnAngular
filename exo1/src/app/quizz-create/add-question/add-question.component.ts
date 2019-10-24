import { Question } from './../../question';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { QuizzService } from 'src/app/quizz.service';

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
    correctAnswer: new FormControl('', Validators.required)
  });

  constructor(private quizz: QuizzService, private router: Router) { }

  ngOnInit() {
  }

  submit() {
    //console.log("test submit add question");
    this.quizz.addQuestion(this.f.value as Question);
    this.router.navigateByUrl('/setup');
  }

}
