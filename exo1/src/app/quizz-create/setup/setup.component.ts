import { Router } from '@angular/router';
import { QuizzService } from 'src/app/quizz.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.component.html',
  styleUrls: ['./setup.component.scss']
})
export class SetupComponent implements OnInit {

  constructor(public quizz: QuizzService, private router: Router) { }

  ngOnInit() {
  }
  finish() {
    this.quizz.addQuizz();
    this.router.navigate(['/', 'finished']);
  }
}
