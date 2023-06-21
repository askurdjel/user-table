import { createAction, props } from '@datorama/akita-ng-effects';
import { User } from '../model/user.model';

export const loadUsers = createAction('[User] Load Users');
export const addUser = createAction('[User] Add User');
export const editUser = createAction(
  '[User] Edit User',
  props<{ user: User }>()
);
