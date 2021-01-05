import { Component, OnInit } from '@angular/core'
import { Country, getCountries } from 'src/app/models/country.model'
import { Router } from '@angular/router'
import { Store } from '@ngxs/store'
import { UpdateCountryInfo } from 'src/app/store/user/user.actions'

@Component({
  selector: 'app-country',
  templateUrl: './country.page.html',
  styleUrls: ['./country.page.scss'],
})
export class CountryPage implements OnInit {
  countries: Country[]
  constructor(private router: Router, private store: Store) {}

  ngOnInit() {
    this.countries = getCountries().map((country: Country) => {
      return {
        ...country,
        icon: this.getRoundFlag(country.name),
      }
    })
    this.registerSearchBar()
  }
  private registerSearchBar() {
    const searchbar = document.querySelector('ion-searchbar')

    searchbar.addEventListener('ionInput', (event: any) => {
      const items = Array.from(document.querySelector('ion-list').children)
      const query = event.target.value.toLowerCase()
      requestAnimationFrame(() => {
        items.forEach((item: any) => {
          const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1
          let display = shouldShow ? 'block' : 'none'
          item.style.display = display
        })
      })
    })
  }
  getRoundFlag(countryName): string {
    const flagName = countryName.trim().toLowerCase().replace(/ /gi, '-').trim()
    return `../../../assets/svg/flags/${flagName}.svg`
  }
  goToRegistrattion(country) {
    this.store.dispatch(new UpdateCountryInfo(country))
    this.router.navigateByUrl('/registration-one')
  }
  navigateBack() {
    this.router.navigateByUrl('/login')
  }
}
