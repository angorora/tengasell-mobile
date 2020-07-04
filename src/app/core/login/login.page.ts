import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Store } from '@ngxs/store'
import { Login } from 'src/app/store/auth/auth.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup
  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl('', { validators: [Validators.required] }),
    })
  }
  login() {
    this.store.dispatch(
      new Login({
        username: this.loginForm.controls.username.value,
        password: this.loginForm.controls.password.value,
      })
    )
  }
  ngOnInit() {}
}
