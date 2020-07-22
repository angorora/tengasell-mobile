import { NgModule } from '@angular/core'
import { PreloadAllModules, RouterModule, Routes } from '@angular/router'
import { AuthGuardService } from './shared/services/auth-guard.service'

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
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('./core/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./core/landing/landing.module').then((m) => m.LandingPageModule),
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
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
