import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  width=document.documentElement.clientWidth*.8-30
  height=document.documentElement.clientHeight
  title = 'yz-design';
}
