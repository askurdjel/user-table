import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { UserEffects } from './store/user.effects';
import { AddUserComponent } from './components/add-user/add-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@NgModule({
  declarations: [AppComponent, UsersComponent, AddUserComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTableModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule,
    //I need to comment this line because I have this error
    /**
     * This likely means that the library (@datorama/akita-ng-effects) which declares EffectsRootModule is not compatible with Angular Ivy.
     * Check if a newer version of the library is available, and update if so.
     * Also consider checking with the library's authors to see if the library is expected to be compatible with Ivy.
     *
     * also tried to downgrade version of angular to 13/14/15 but error still appear
     */
    //AkitaNgEffectsModule.forRoot([UserEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
