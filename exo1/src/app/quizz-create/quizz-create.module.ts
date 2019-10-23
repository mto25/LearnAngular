import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuizzCreateRoutingModule } from './quizz-create-routing.module';
import { CreateComponent } from './create/create.component';
import { SetupComponent } from './setup/setup.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FinishedComponent } from './finished/finished.component';
import { WidgetModule } from '../widget/widget.module';


@NgModule({
  declarations: [CreateComponent, SetupComponent, AddQuestionComponent, FinishedComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    QuizzCreateRoutingModule,
    WidgetModule
  ]
})
export class QuizzCreateModule { }
