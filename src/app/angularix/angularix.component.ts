import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angularix',
  templateUrl: './angularix.component.html',
  styleUrls: ['./angularix.component.css']
})
export class AngularixComponent implements OnInit {

  tagging = 'texto random';

  constructor() { }

  ngOnInit() {
  }

}
