import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import {QuizComponent} from "../app/quizzes/quiz/quiz.component";
import {QuizListComponent} from "../app/quizzes/quiz-list/quiz-list.component";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private quizzes: Quiz[] = QUIZ_LIST;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]> = new BehaviorSubject(QUIZ_LIST);

  private stockURL = 'https://raw.githubusercontent.com/NablaT/starter-quiz-two/master/mock-quiz.json';

  constructor(private http: HttpClient) {
  }

  addQuiz(quiz: Quiz) {
    this.quizzes.push(quiz);
    this.quizzes$.next(this.quizzes);

    // You need here to update the list of quiz and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
  }
  deleteQuiz(quiz: Quiz){
    let index = this.quizzes.indexOf(quiz);
    this.quizzes.splice(index,1);
    this.quizzes$.next(this.quizzes);

  }
  getQuizzes(){
    this.http.get<Quiz[]>(this.stockURL).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
      console.log(quizList);
    });


  }
}
