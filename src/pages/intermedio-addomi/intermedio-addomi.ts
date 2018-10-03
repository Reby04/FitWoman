import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EsercizioService } from '../../services/esercizio.service';
import { Esercizio } from '../../models/esercizio.model';

/**
 * Generated class for the IntermedioAddomiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-intermedio-addomi',
  templateUrl: 'intermedio-addomi.html',
})
export class IntermedioAddomiPage {

  list:Array<Esercizio>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private esercizioService: EsercizioService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IntermedioAddomiPage');
    this.esercizioService.esercizi().subscribe((data:Array<Esercizio>)=> {
      this.list=data});
  }

}
