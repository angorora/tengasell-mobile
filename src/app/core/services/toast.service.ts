import { Injectable } from '@angular/core'
import { ToastController } from '@ionic/angular'
import { PRIMARY_OUTLET } from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(public toastController: ToastController) {}
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      color: 'primary',
      duration: 1500,
    })
    toast.present()
  }

  async presentToastWithOptions(
    header: string,
    message: string,
    buttons: any[]
  ) {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      position: 'top',
      buttons: buttons,
    })
    toast.present()
  }
}
