import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ServicesProvider {
	data: any;

  constructor(public http: Http) {
    console.log('Hello ServicesProvider Provider');
  }
  // getData() {
  //   return this.http.get("YOUR_PATH_TO_THE_JSON_FILE")
  //       .map((res:Response) => res.json().YOUR_JSON_HEADER); //records in this case
  // }
//   load() {
//     console.log('json called');
//     return new Promise(resolve => {
//         this.http.get('assets/www/data/data.json').map(response => {console.log("pos i")
//             this.data = response.json();
//             console.log("file data = ",this.data);
//             resolve(this.data);
//         });
//     });
// }
load() {
      if (this.data) {
          // already loaded data
          return Promise.resolve(this.data);
      }

      // don't have the data yet
      return new Promise(resolve => {
          // We're using Angular Http provider to request the data,
          // then on the response it'll map the JSON data to a parsed JS object.
          // Next we process the data and resolve the promise with the new data.

          this.http.get('assets/data/data.json').subscribe(res => {
              // we've got back the raw data, now generate the core schedule data
              // and save the data for later reference
              this.data = res.json();
              resolve(this.data);
              console.log(this.data);
          });
      });
  }

}
