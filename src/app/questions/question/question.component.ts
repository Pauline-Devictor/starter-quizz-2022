import {Component, Input, OnInit} from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import { Quiz } from '../../../models/quiz.model';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {Question} from "../../../models/question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionsComponent implements OnInit{
 @Input()
 question: Question | undefined;
  ngOnInit():void {

  }
}
