import {Component, OnInit} from "@angular/core";
import {QuizService} from "../../../services/quiz.service";
import {Quiz} from "../../../models/quiz.model";
import {User} from "../../../models/user.model";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit{
  public userList: User[] = [];

  constructor(public quizService: QuizService) {
    this.quizService.users$.subscribe((userList) => {
      this.userList = userList;
    });
  }

  ngOnInit() {
  }

  deleteUser(user: User){
    this.quizService.deleteUser(user);
    console.log('event deletion',user);
  }
}
