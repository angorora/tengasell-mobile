import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { RouteReuseStrategy } from '@angular/router'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular'
import { SplashScreen } from '@ionic-native/splash-screen/ngx'
import { StatusBar } from '@ionic-native/status-bar/ngx'
import { NgxsModule } from '@ngxs/store'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { environment } from 'src/environments/environment'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AuthState } from './store/auth/auth-state'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { HttpInterceptorService } from './core/services/http-interceptor.service'
import { ErrorState } from './store/error/error.state'
import { UserState } from './store/user/user.state'
import { NgxsRouterPluginModule } from '@ngxs/router-plugin'
import { AppState } from './store/app/app.state'
import { SuperTabsModule } from '@ionic-super-tabs/angular'
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SuperTabsModule.forRoot(),
    NgxsModule.forRoot([AuthState, ErrorState, UserState, AppState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: 'authState.token',
    }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
