import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @Input() title = '';
  users = [];//[{
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Active'
  // },
  // {
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Active'
  // },
  // {
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Inactive'
  // },
  // {
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Active'
  // },
  // {
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Inactive'
  // },
  // {
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Active'
  // },
  // {
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Inactive'
  // },
  // {
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Active'
  // },
  // {
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Inactive'
  // },
  // {
  //   'firstName': 'Pradeep',
  //   'lastName': 'Kumar',
  //   'email': 'pradeepke28@gmail.com',
  //   'phone': '7358318949',
  //   'designation': 'Trainee',
  //   'status': 'Active'
  // }]
  tableHeader = ["S.no", "First", "Last", "Email", "Phone", "Designation", "Status"]

  constructor(
    private userService: UserServiceService
  ) { }

  async ngOnInit() {
    const users = await this.userService.getUsers()
    // console.log(products);
    this.users = users['pradeep'];
  }
  navigatetoUser(id) {
    console.log(id);
    //this.router.navigate([`users/${id}`]);
  }

  getActiveCount() {
    let count: number = 0;

    for (let i = 0; i < this.users.length; i++) {

      if (this.users[i].status === "Active") {
        count++;
      }

    }
    return count;
  }

  getInActiveCount() {
    let count: number = 0;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].status === "Inactive") {
        count++;
      }
    }
    return count;
  }

}
