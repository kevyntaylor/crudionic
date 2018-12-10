import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    public alertCtrl: AlertController
    ) {

  }
datos={}
apiUrl='http://localhost/crud/';
logForm(){
  let newData={
    funcion: 'newMenu',
    datos: this.datos
  }
  // console.log(newData);
  // console.log(this.datos);
  this.http.post(this.apiUrl, JSON.stringify(newData))
  .subscribe(data=>{
    console.log(data);
    if(data==='true'){
      console.log('return');
      this.showAlert();
      this.navCtrl.pop();
    }
  },
  (err)=>{
    console.log(err);
  }
  );
}

showAlert() {
  const alert = this.alertCtrl.create({
    title: 'Menú agregado',
    buttons: ['OK']
  });
  alert.present();
}

}
