import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {QuestionsComponent} from "../question/question.component";
import {QUESTION_SPORT, QUESTION_VIDE} from "../../../mocks/quiz-list.mock";

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})


export class QuestionListComponent implements OnInit {
  ngOnInit() {
  }
}
