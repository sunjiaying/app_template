import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner,
    private toastCtrl: ToastController
  ) {

  }

  presentToast(text: string) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.presentToast(barcodeData.text);
     }).catch(err => {
         console.log('Error', err);
     });
  }
}
