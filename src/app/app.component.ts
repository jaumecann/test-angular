import { Component } from '@angular/core';

import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myfirstapp';
  myArray = ['Baltimore', 'Phoenix', 'Milwaukee'];
  activated = true;

  name2:string = 'Tom';
  age2:number = 12;
  
  posts = [];

  constructor (private dataService: DataService){
    this.dataService.getData().subscribe( data => {
      this.posts = data
    });
  }

  

}
