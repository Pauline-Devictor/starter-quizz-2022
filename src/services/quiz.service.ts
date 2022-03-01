import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { Quiz } from '../models/quiz.model';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
import {Question, QUESTION_LIST} from "../models/question.model";
import {User} from "../models/user.model";
import {USER_LIST} from "../mocks/user-list.mock";

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
    this.getQuizzes();
  }

  addQuiz(quiz: Quiz) {
    let id = this.quizzes.length;
    id += 1
    quiz.id = String(id);
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
      this.addId();
      this.quizzes$.next(this.quizzes);
      console.log(quizList);
    });
  }

  addId(){
    let id =0
    this.quizzes.forEach(value => {
      value.id = String(id);
      id +=1;
    })
  }

  getQuiz(id: string): Observable<Quiz> {
    const quiz = this.quizzes.find(q => q.id === id)!;
    return of(quiz);
  }

  addQuestion(question:Question,id:string|undefined){
    let quiz = this.quizzes.find(q => q.id === id)!;
    quiz.questions.push(question);
   /* this.questions.push(question);
    this.questions$.next(this.questions);*/
    this.quizzes$.next(this.quizzes);
  }

  deleteQuestion(question:Question, id:string|undefined){
    let quiz = this.quizzes.find(q => q.id === id)!;
    let index = quiz.questions.indexOf(question);
    let indexQuiz = this.quizzes.indexOf(quiz)
    this.quizzes[indexQuiz].questions.splice(index,1);
    this.quizzes$.next(this.quizzes);
  }
}
