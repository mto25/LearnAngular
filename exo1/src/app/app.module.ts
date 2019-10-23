import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { MainModule } from './main/main.module';
import { QuizzCreateModule } from './quizz-create/quizz-create.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    LayoutModule,
    MainModule,
    QuizzCreateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
