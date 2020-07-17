import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-registration-two',
  templateUrl: './registration-two.page.html',
  styleUrls: ['./registration-two.page.scss'],
})
export class RegistrationTwoPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  navigateBack() {
    this.router.navigateByUrl('/registration-one')
  }
}
