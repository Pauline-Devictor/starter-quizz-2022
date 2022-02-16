import {NgModule} from '@angular/core';
import {RouterModule,Routes} from "@angular/router";
import {EditQuizComponent} from "./quizzes/edit-quiz/edit-quiz.component";
import {QuizListComponent} from "./quizzes/quiz-list/quiz-list.component";
import { QuizComponent } from './quizzes/quiz/quiz.component';
import {QuestionsComponent} from "./questions/question/question.component";
import {QuestionListComponent} from "./questions/question-list/question-list.component";

const routes: Routes = [
  {path:'quiz-list', component: QuizListComponent},
  {path: 'edit-quiz', component: EditQuizComponent},
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: EditQuizComponent },//Permet de relier à la page details

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{

}
