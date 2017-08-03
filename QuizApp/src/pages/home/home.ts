import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ServicesProvider } from '../../providers/services/services';
import { ResultsPage } from '../../pages/results/results';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	patdata: any;


  constructor(public navCtrl: NavController,public servicesProvider: ServicesProvider) {

  // service provider is a dependency of this page, we use this service to get data from json file
  this.servicesProvider.load().then((data) => {
      console.log("what is in the data ", data);
      this.patdata= data;
    });

  }
  // result page navigation
  seeResults(){
  	this.navCtrl.push(ResultsPage);
  }

}
