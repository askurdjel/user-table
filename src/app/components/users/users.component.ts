import { Component, OnInit } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { User } from 'src/app/model/user.model';
import { addUser, editUser, loadUsers } from 'src/app/store/user.actions';
import { UserQuery } from 'src/app/store/user.query';
import { UserService } from 'src/app/store/user.service';
import { UserStore } from 'src/app/store/user.store';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  /**
   * Because of error which I get related for package @datorama/akita-ng-effects I cant use effects so I create users.service to do effects job
   */

  canAddUser = true; //flag that indicate if add user button is disabled in case if dialog is already opened
  users$ = this.query.users$; //list of all users
  activeUsers$ = this.query.activeUsers$; //list of users with active flag true

  constructor(
    private actions: Actions,
    private query: UserQuery,
    private service: UserService,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.service.loadUsers();
  }

  addUser() {
    this.canAddUser = false;
    const dialogRef = this.modal.open(AddUserComponent, {
      width: '400px',
    });
    dialogRef
      .afterClosed()
      .pipe(
        tap(() => {
          this.canAddUser = true;
        })
      )
      .subscribe();
  }

  editUser(user: User, event: any) {
    this.service.editUser(user, event.checked);

    //this.actions.dispatch(editUser({ user }));
  }
}
