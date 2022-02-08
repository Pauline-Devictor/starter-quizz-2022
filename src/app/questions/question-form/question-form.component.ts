import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {QuestionsComponent} from "../question/question.component";
import {QUESTION_SPORT, QUESTION_VIDE} from "../../../mocks/quiz-list.mock";

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})


export class QuestionFormComponent implements OnInit {
  ngOnInit() {
  }
}
