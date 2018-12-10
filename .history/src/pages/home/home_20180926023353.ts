import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private http: HttpClient
    ) {

  }
datos={}
apiUrl='http://localhost/crud/';
logForm(){
  let newdata={
    'funcion': 'newMenu',
   // datos: this.datos
  }
  // console.log(data);
  this.http.post(this.apiUrl, JSON.stringify(newdata))
  .subscribe(data=>{
    console.log(data);
  },
  (err)=>{
    console.log(err);
  }
  );
}

}
