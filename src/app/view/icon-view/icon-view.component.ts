import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-view',
  templateUrl: './icon-view.component.html',
  styleUrls: ['./icon-view.component.less']
})
export class IconViewComponent implements OnInit {

  data=[
    {
      attr:'[size]',
      explain:"图标大小 12px",
      type:"number",
      default:12
    },
    {
      attr:'[type]',
      explain:"图标类型，即图标的名字",
      type:"string",
      default:"无默认值"
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
