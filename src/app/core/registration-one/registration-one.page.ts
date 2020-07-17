import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store, Actions, ofActionSuccessful } from '@ngxs/store'
import { Subject, Subscription } from 'rxjs'
import { RegisterUser } from 'src/app/store/user/user.actions'

@Component({
  selector: 'app-registration-one',
  templateUrl: './registration-one.page.html',
  styleUrls: ['./registration-one.page.scss'],
})
export class RegistrationOnePage implements OnInit {
  company = false
  submitted = false
  regForm: FormGroup
  username: string
  password: string
  passwordRetype: string
  pin: string
  pinRetype: string
  firstName: string
  lastName: string
  cellphone: string
  userFields: { [key: string]: FormControl }
  companyFields: {}
  actionsUnsubscribe$: Subscription
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store,
    private actions$: Actions
  ) {
    this.userFields = {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      passwordRetype: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        // this.validatePasswordsquality,
      ]),
      pin: new FormControl('', [Validators.required]),
      pinRetype: new FormControl('', [
        Validators.required,
        // this.validatePinsquality,
      ]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    }

    this.regForm = this.formBuilder.group(this.userFields)
  }
  ngOnInit() {
    this.actionsUnsubscribe$ = this.actions$
      .pipe(ofActionSuccessful(RegisterUser))
      .subscribe(() => {
        this.router.navigateByUrl('/login')
      })
  }

  validatePinsquality(control: FormControl) {
    let pinRetyped = control.value
    let pin = this.regForm.controls.pin.value
    if (pin !== pinRetyped) {
      control.setErrors({ passwordMismatch: true })
      return { pinError: 'The PINs are different' }
    }
    return null
  }

  validatePasswordsquality(control: FormControl) {
    let passwordRetyped = control.value
    let pin = this.regForm.controls.password.value
    if (pin !== passwordRetyped) {
      control.setErrors({ passwordMismatch: true })
      return { pinError: 'The passwords are different' }
    }
    return null
  }

  register() {
    this.submitted = true
    if (this.regForm.valid) {
      this.store.dispatch(new RegisterUser(this.regForm.value))
    }
  }

  navigateBack() {
    this.router.navigateByUrl('/landing')
  }
  ngOnDestroy() {
    this.actionsUnsubscribe$.unsubscribe()
  }
}
