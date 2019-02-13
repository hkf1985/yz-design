import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.less']
})
export class RightNavComponent implements OnInit {

  width=document.documentElement.clientWidth*.2
  height=document.documentElement.clientHeight
  constructor() { }

  ngOnInit() {
  }

}
