import { ScoreComponent } from './score/score.component';
import { QuestionComponent } from './question/question.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'score', component: ScoreComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzExecRoutingModule { }
