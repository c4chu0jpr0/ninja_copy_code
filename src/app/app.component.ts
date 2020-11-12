import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  listData: any= [
    {
      firstName: "a",
      lastName: "b"
    }
  ]
  doSomething(infor){
    this.listData.push(infor);
  }
}
