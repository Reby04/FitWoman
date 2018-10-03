import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { PrincipianteAddomiPage } from '../principiante-addomi/principiante-addomi';
import { IntermedioAddomiPage } from '../intermedio-addomi/intermedio-addomi';
import { AvanzatoAddomiPage } from '../avanzato-addomi/avanzato-addomi';
import { PrincipianteCoscePage } from '../principiante-cosce/principiante-cosce';
import { IntermedioCoscePage } from '../intermedio-cosce/intermedio-cosce';
import { AvanzatoCoscePage } from '../avanzato-cosce/avanzato-cosce';
import { PrincipianteGluteiPage } from '../principiante-glutei/principiante-glutei';
import { IntermedioGluteiPage } from '../intermedio-glutei/intermedio-glutei';
import { AvanzatoGluteiPage } from '../avanzato-glutei/avanzato-glutei';
// import { AccountPage } from '../account/account';
// import { RoutinePage } from '../routine/routine';
// import { CreaSchedaPage } from '../crea-scheda/crea-scheda';

@Component({
  selector: 'page-home',
 templateUrl: 'home.html'
  })


export class HomePage {

  result:any = [];
  data: Observable<any>;
  constructor(public navCtrl: NavController, translate: TranslateService, public http: HttpClient) {
    translate.setDefaultLang('it');
    translate.use('en');
  }

  addomi(x: number) {
    if (x == 1)
   this.navCtrl.push(PrincipianteAddomiPage);
   else 
   if (x == 2)
   this.navCtrl.push(IntermedioAddomiPage);
   else
   this.navCtrl.push(AvanzatoAddomiPage);
  }

  glutei(x: number) {
    if (x == 1)
   this.navCtrl.push(PrincipianteCoscePage);
   else 
   if (x == 2)
   this.navCtrl.push(IntermedioCoscePage);
   else
   this.navCtrl.push(AvanzatoCoscePage);
  }

  gambe(x: number) {
    if (x == 1)
   this.navCtrl.push(PrincipianteGluteiPage);
   else 
   if (x == 2)
   this.navCtrl.push(IntermedioGluteiPage);
   else
   this.navCtrl.push(AvanzatoGluteiPage);
  }

}
