import { Injectable } from '@angular/core';
import { Query, QueryEntity } from '@datorama/akita';
import { UserState, UserStore } from './user.store';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class UserQuery extends QueryEntity<UserState, User> {
  constructor(private userStore: UserStore) {
    super(userStore);
  }

  users$ = this.selectAll();
  activeUsers$ = this.selectAll().pipe(
    map((users: User[]) => users.filter((x) => x.active))
  );
}
