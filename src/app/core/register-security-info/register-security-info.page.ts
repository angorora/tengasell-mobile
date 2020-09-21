import { Component, OnInit } from '@angular/core'
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms'
import { Actions, Store, ofActionSuccessful } from '@ngxs/store'
import { ToastService } from 'src/app/shared/services/toast.service'
import { SaveUser, UpdateSecurityInfo } from 'src/app/store/user/user.actions'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-security-info',
  templateUrl: './register-security-info.page.html',
  styleUrls: ['./register-security-info.page.scss'],
})
export class RegisterSecurityInfoPage implements OnInit {
  securityForm: FormGroup
  userFields: { [key: string]: FormControl }
  password: string
  passwordRetype: string
  pin: string
  pinRetype: string
  submitted = false
  actionsUnsubscribe$: Subscription
  constructor(
    private formBuilder: FormBuilder,
    private actions$: Actions,
    private toast: ToastService,
    private store: Store,
    private router: Router
  ) {
    this.userFields = {
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^[A-Za-z0-9]*$/),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(/^[A-Za-z0-9_@./#&+-]*$/),
      ]),
      passwordRetype: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    }
    this.securityForm = this.formBuilder.group(this.userFields)
  }
  register() {
    this.submitted = true
    if (this.securityForm.valid) {
      this.store.dispatch(
        new UpdateSecurityInfo({
          username: this.securityForm.controls.username.value,
          password: this.securityForm.controls.password.value,
        })
      )
    }
  }
  ngOnInit() {
    this.actionsUnsubscribe$ = this.actions$
      .pipe(ofActionSuccessful(SaveUser))
      .subscribe((action) => {
        this.toast.presentToast('User saved successfully')
        this.router.navigateByUrl('/login')
      })
  }
  navigateBack() {
    this.router.navigateByUrl('/registration-one')
  }
  ngOnDestroy() {
    this.actionsUnsubscribe$.unsubscribe()
  }
}
