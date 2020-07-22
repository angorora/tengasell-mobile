import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store, Actions, ofActionSuccessful } from '@ngxs/store'
import { Subscription } from 'rxjs'
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
      username: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-z0-9_-]{3,16}$/g),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      passwordRetype: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      pin: new FormControl('', [Validators.required]),
      pinRetype: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/\d/g),
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
    }
    this.regForm = this.formBuilder.group(this.userFields)
  }
  ngOnInit() {
    this.actionsUnsubscribe$ = this.actions$
      .pipe(ofActionSuccessful(RegisterUser))
      .subscribe((action) => {
        console.dir(action)
        this.router.navigateByUrl('/login')
      })
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
