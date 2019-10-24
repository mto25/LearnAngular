import { FinishedComponent } from './finished/finished.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { SetupComponent } from './setup/setup.component';
import { CreateComponent } from './create/create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'setup', component: SetupComponent },
  { path: 'add-question', component: AddQuestionComponent },
  { path: 'finished', component: FinishedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizzCreateRoutingModule { }
