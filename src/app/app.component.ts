import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DemoRoute';
  name = 'Angular';

  bgColor = 'grey';

  changeColor(){
    this.bgColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    
  }

  message="Typescript";
  message2="Angular";
  
}
