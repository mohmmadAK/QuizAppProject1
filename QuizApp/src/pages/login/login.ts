import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';

//IMPORT LOCAL STORAGE
import { Storage } from '@ionic/storage';

//SECURiTY FEATURE: MD5 PASSWORD ENCRYPTION MODULE
import {Md5} from 'ts-md5/dist/md5';

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  userInput = { 'email' : '', 'password' : ''  };

  constructor(public navCtrl: NavController, public navParams: NavParams,  public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
  	this.navCtrl.push(SignupPage);
  }

  goToHome(){

    this.saveUserInputLocally()

  	this.navCtrl.push(HomePage);
  }

  //Local Storage Implementation
  saveUserInputLocally(){
    this.storage.set("USER_EMAIL", this.userInput.email)

    //PASSWORD MD5 ENCRYPTION
    let passwordmd5 = Md5.hashStr(this.userInput.password).toString()
    console.log("password md5 is : " + passwordmd5)

    this.storage.set("USER_PASSWORD", passwordmd5)
  }

}
