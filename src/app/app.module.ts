import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service/auth-service';
import { RegisterPage } from '../pages/register/register';
import { CreaSchedaPage } from '../pages/crea-scheda/crea-scheda';
import { PrincipianteAddomiPage } from '../pages/principiante-addomi/principiante-addomi';
import { AccountPage } from '../pages/account/account';
import { PrincipianteCoscePage } from '../pages/principiante-cosce/principiante-cosce';
import { PrincipianteGluteiPage } from '../pages/principiante-glutei/principiante-glutei';
import { IntermedioAddomiPage } from '../pages/intermedio-addomi/intermedio-addomi';
import { IntermedioCoscePage } from '../pages/intermedio-cosce/intermedio-cosce';
import { IntermedioGluteiPage } from '../pages/intermedio-glutei/intermedio-glutei';
import { AvanzatoAddomiPage } from '../pages/avanzato-addomi/avanzato-addomi';
import { AvanzatoCoscePage } from '../pages/avanzato-cosce/avanzato-cosce';
import { AvanzatoGluteiPage } from '../pages/avanzato-glutei/avanzato-glutei';
import { RoutinePage } from '../pages/routine/routine';
import { SceltaZonaPage } from '../pages/scelta-zona/scelta-zona';
import { InizioPage } from '../pages/inizio/inizio';
import { RiscaldamentoPage } from '../pages/riscaldamento/riscaldamento';
import { StretchingPage } from '../pages/stretching/stretching';
import { EsercizioService } from '../services/esercizio.service';

export function createTranslateLoader(http: HttpClient) { return new TranslateHttpLoader(http, './assets/i18n/', '.json'); } 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage, 
    CreaSchedaPage,
    PrincipianteAddomiPage,
    AccountPage,
    PrincipianteAddomiPage,
    PrincipianteCoscePage,
    PrincipianteGluteiPage,
    IntermedioAddomiPage,
    IntermedioCoscePage,
    IntermedioGluteiPage,
    AvanzatoAddomiPage,
    AvanzatoCoscePage,
    AvanzatoGluteiPage,
    SceltaZonaPage,
    RoutinePage,
    InizioPage,
    RegisterPage,
    RiscaldamentoPage,
    StretchingPage


    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({ 
      loader: { 
        provide: TranslateLoader, 
        useFactory: (createTranslateLoader), 
        deps: [HttpClient] }})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    CreaSchedaPage,
    PrincipianteAddomiPage,
    AccountPage,
    PrincipianteAddomiPage,
    PrincipianteCoscePage,
    PrincipianteGluteiPage,
    IntermedioAddomiPage,
    IntermedioCoscePage,
    IntermedioGluteiPage,
    AvanzatoAddomiPage,
    AvanzatoCoscePage,
    AvanzatoGluteiPage,
    SceltaZonaPage,
    RoutinePage,
    InizioPage,
    RegisterPage,
    RiscaldamentoPage,
    StretchingPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    EsercizioService
  ]
})
export class AppModule {}
