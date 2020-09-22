import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./core/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'registration-one',
    loadChildren: () =>
      import('./core/registration-one/registration-one.module').then(
        (m) => m.RegistrationOnePageModule
      ),
  },
  {
    path: 'password-reset',
    loadChildren: () =>
      import('./core/password-reset/password-reset.module').then(
        (m) => m.PasswordResetPageModule
      ),
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./core/country/country.module').then((m) => m.CountryPageModule),
  },
  {
    path: 'register-security-info',
    loadChildren: () =>
      import(
        './core/register-security-info/register-security-info.module'
      ).then((m) => m.RegisterSecurityInfoPageModule),
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
