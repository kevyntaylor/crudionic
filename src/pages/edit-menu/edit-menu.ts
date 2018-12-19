import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

/**
 * Generated class for the EditMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-menu',
  templateUrl: 'edit-menu.html',
})
export class EditMenuPage {
  menu: any;
  formMenu: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {
    this.menu=navParams.get('menu');
    this.formMenu=this.createMyForm();
  }
 private createMyForm(){
   return this.formBuilder.group({
     nombre:[this.menu['nombre'], Validators.required],
     descripcion:[this.menu['descripcion'], Validators.required],
     imagen: this.menu['imagen'],
     idimagen: this.menu['idmenu'],
     funcion: 'editMenu'
   });
 }


  ionViewDidLoad() {
    console.log('ionViewDidLoad EditMenuPage');
  }

editMenu(){
  const datos=this.formMenu.value;
  this.navCtrl.pop();
}


}
