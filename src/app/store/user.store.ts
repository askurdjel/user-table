import { EntityStore, EntityState, StoreConfig } from '@datorama/akita';
import { User } from '../model/user.model';
import { Injectable } from '@angular/core';

export interface UserState extends EntityState<User> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'users',
})
export class UserStore extends EntityStore<UserState, User> {
  constructor() {
    super();
  }
}
