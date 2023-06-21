import { Injectable } from '@angular/core';
import {} from '@datorama/akita';
import { Actions, createEffect, ofType } from '@datorama/akita-ng-effects';
import { UserStore } from './user.store';
import { tap } from 'rxjs/operators';
import { addUser, editUser, loadUsers } from './user.actions';
import { User } from '../model/user.model';

@Injectable({ providedIn: 'root' })
export class UserEffects {
  constructor(private actions$: Actions, private userStore: UserStore) {}

  loadUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadUsers),
        tap(() => {
          const users: User[] = [];
          users.push(
            { id: 1, name: 'Marko', active: true },
            { id: 2, name: 'Janko', active: false }
          );
          this.userStore.add(users);
        })
      ),
    { dispatch: false }
  );

  addUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addUser),
        tap((action) => {
          const newUser = { id: -1, name: '', active: false } as User;
          this.userStore.add(newUser);
        })
      ),
    { dispatch: false }
  );

  editUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(editUser),
        tap((action) => {
          this.userStore.update(action.user.id, action.user);
        })
      ),
    { dispatch: false }
  );
}
