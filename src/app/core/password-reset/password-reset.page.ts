import { Component, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { Store, Actions, ofActionSuccessful } from '@ngxs/store'
import { ResetPassword } from 'src/app/store/auth/auth.actions'
import { ToastService } from 'src/app/core/services/toast.service'

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPage implements OnInit {
  username: string
  password: string
  passwordRetype: string
  userFields: { [key: string]: FormControl }
  actionsUnsubscribe$: Subscription
  regForm: FormGroup
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store,
    private actions$: Actions,
    private toast: ToastService
  ) {
    this.userFields = {
      username: new FormControl('', [
        Validators.required,
        //Validators.pattern(/^[a-z0-9_-]{3,16}$/g),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      passwordRetype: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    }
    this.regForm = this.formBuilder.group(this.userFields)
  }

  ngOnInit() {
    this.actionsUnsubscribe$ = this.actions$
      .pipe(ofActionSuccessful(ResetPassword))
      .subscribe(() => {
        this.toast.presentToast('Password reset successfully')
        this.router.navigateByUrl('/login')
      })
  }
  resetPassword() {
    if (this.regForm.valid)
      this.store.dispatch(
        new ResetPassword({
          username: this.regForm.controls.username.value,
          password: this.regForm.controls.password.value,
        })
      )
  }
  navigateBack() {
    this.router.navigateByUrl('/login')
  }
  ngOnDestroy() {
    this.actionsUnsubscribe$.unsubscribe()
  }
}
