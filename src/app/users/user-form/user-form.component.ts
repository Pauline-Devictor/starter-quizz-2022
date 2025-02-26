import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {QuizService} from "../../../services/quiz.service";
import {User} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})

export class UserFormComponent implements OnInit{

  public userForm: FormGroup;

  constructor(public formBuilder: FormBuilder, public userService: UserService) {
    this.userForm = this.formBuilder.group({
      name: [''],
      password: [''],
    });
  }

  ngOnInit() {
  }

  addUser() {
    const userToCreate: User = this.userForm.getRawValue() as User;
    console.log('Add User: ', userToCreate);
    this.userService.addUser(userToCreate);
  }
}

