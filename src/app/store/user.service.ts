import { Injectable } from '@angular/core';
import { UserStore } from './user.store';
import { User } from '../model/user.model';
import { UserQuery } from './user.query';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private userStore: UserStore, private query: UserQuery) {}

  loadUsers() {
    const users: User[] = [];
    users.push(
      { id: 1, name: 'Marko', active: true },
      { id: 2, name: 'Janko', active: false }
    );
    this.userStore.add(users);
  }

  async addUser(newUser: User) {
    this.query
      .selectLast()
      .pipe(
        tap((last) => {
          if (last) newUser.id = last.id + 1;
          else newUser.id = 1;

          this.userStore.add(newUser);
        })
      )
      .subscribe();
  }

  editUser(user: User, active: boolean) {
    this.userStore.update(user.id, { active });
  }
}
