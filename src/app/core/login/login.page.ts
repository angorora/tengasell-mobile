import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Store, Select } from '@ngxs/store'
import { Login } from 'src/app/store/auth/auth.actions'
import { Router } from '@angular/router'
import { ErrorState } from 'src/app/store/error/error.state'
import { HttpErrorModel } from 'src/app/models/http-error.model'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage implements OnInit {
  loginForm: FormGroup
  @Select(ErrorState.errorMessage)
  error$: Observable<string>
  constructor(
    private formBuilder: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', { validators: [Validators.required] }),
      password: new FormControl('', { validators: [Validators.required] }),
    })
  }

  login() {
    if (this.loginForm.valid)
      this.store.dispatch(
        new Login({
          username: this.loginForm.controls.username.value,
          password: this.loginForm.controls.password.value,
        })
      )
  }
  navigateBack() {
    this.router.navigateByUrl('/landing')
  }

  ngOnInit() {}
}
