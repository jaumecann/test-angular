import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input() coca; 

  ngOnInit() {
  }

  name:string = 'Pepelu';
  address: {street:string; city:string;};



  constructor() { 
    this.address = {
      street: 'Calle del Tomate 22',
      city: 'Bribonopolis'
    };
  };

  

}
