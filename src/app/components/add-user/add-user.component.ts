import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/store/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  form: FormGroup;

  constructor(
    private service: UserService,
    private dialog: MatDialog,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      name: this.fb.control<string | undefined>(undefined, Validators.required),
      active: this.fb.control<boolean>(false),
    });
  }

  ngOnInit(): void {}

  addUser() {
    if (this.form.valid) {
      const user = { ...this.form.value, ...{ id: -1 } };
      this.service.addUser(user);
      this.dialog.closeAll();
    }
  }
}
