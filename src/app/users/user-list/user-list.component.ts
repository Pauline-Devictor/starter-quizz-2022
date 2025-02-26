import {Component, OnInit} from "@angular/core";
import {User} from "../../../models/user.model";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit{
  public userList: User[] = [];

  constructor(public userService: UserService) {
    this.userService.users$.subscribe((userList) => {
      this.userList = userList;
    });
  }

  ngOnInit() {
  }

  deleteUser(user: User){
    this.userService.deleteUser(user);
    console.log('event deletion',user);
  }
}
