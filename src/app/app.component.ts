import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCardView: boolean;
  data: any;
  
  constructor() {
    this.isCardView = false;
  }

  getData(data) {
    this.isCardView = true;
    this.data = data
    console.log(data)
  }
}
