import { Component, OnInit } from '@angular/core'
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Store, Actions, ofActionSuccessful } from '@ngxs/store'
import { Subscription } from 'rxjs'
import { SaveUser, UpdatePersonalInfo } from 'src/app/store/user/user.actions'
import { ToastService } from 'src/app/shared/services/toast.service'

@Component({
  selector: 'app-registration-one',
  templateUrl: './registration-one.page.html',
  styleUrls: ['./registration-one.page.scss'],
})
export class RegistrationOnePage {
  company = false

  regForm: FormGroup
  username: string

  firstName: string
  lastName: string
  cellphone: string
  userFields: { [key: string]: FormControl }
  companyFields: {}
  isCompany: false
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.userFields = {
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      isCompanyToggle: new FormControl(),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[0-9]*$/g),
        Validators.maxLength(10),
      ]),
      companyName: new FormControl(),
      addressLine1: new FormControl(),
      addressLine2: new FormControl(),
      city: new FormControl(),
      province: new FormControl(),
      postCode: new FormControl(),
      description: new FormControl(),
    }
    this.regForm = this.formBuilder.group(this.userFields)
  }

  goToSecurityPage() {
    if (this.regForm.valid) {
      this.store.dispatch(
        new UpdatePersonalInfo({
          firstname: this.regForm.controls.firstname.value,
          lastname: this.regForm.controls.lastname.value,
          email: this.regForm.controls.email.value,
          phone: this.regForm.controls.phone.value,
          userType: 'USER',
        })
      )
      this.router.navigateByUrl('/register-security-info')
    }
    return
  }
  toggleCompany() {
    this.isCompany = this.regForm.controls.isCompanyToggle.value
  }
  navigateBack() {
    this.router.navigateByUrl('/country')
  }
}
