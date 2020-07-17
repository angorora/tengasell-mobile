import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store } from '@ngxs/store'

@Component({
  selector: 'app-registration-one',
  templateUrl: './registration-one.page.html',
  styleUrls: ['./registration-one.page.scss'],
})
export class RegistrationOnePage implements OnInit {
  company = false
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
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.userFields = {
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      passwordRetype: new FormControl('', [Validators.required]),
      pin: new FormControl('', [Validators.required]),
      pinRetype: new FormControl('', [Validators.required]),
      userType: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      cellphone: new FormControl('', [
        Validators.required,
        Validators.minLength(9),
        Validators.maxLength(9),
      ]),
    }

    this.regForm = this.formBuilder.group(this.userFields)
  }

  next() {
    this.router.navigateByUrl('/registration-two')
  }
  navigateBack() {
    this.router.navigateByUrl('/landing')
  }
  ngOnInit() {}
}
