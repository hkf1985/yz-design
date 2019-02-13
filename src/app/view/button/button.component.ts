import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  data = [
    {
      attr:'[size]',
      explain:"按钮大小,分别是small middle large full",
      type:"string",
      default:"middle "
    },
    {
      attr:'[type]',
      explain:"按钮类型,分别是primary ,warning,default",
      type:"string",
      default:"primary "
    },
    {
      attr:'[shape]',
      explain:"按钮形状,entity ,hollow,radio；large full类型按钮不存在radio类型",
      type:"string",
      default:"entity "
    },
    {
      attr:'[iconType]',
      explain:"按钮图标，small类型按钮不能设置默认图标",
      type:"string",
      default:"无默认值 "
    },
    {
      attr:'[loading]',
      explain:"设置点击后动画,默认值为false，修改为true时执行动画，动画仅将iconFont引入可以看到",
      type:"boolean",
      default:"false "
    }
    ,
    {
      attr:'[disabled]',
      explain:"默认为false,改为true后按钮禁用，禁用后点击事件将不起作用",
      type:"boolean",
      default:"false"
    }
  ]
  loader:boolean
  loaderTwo:boolean
  constructor() { }

  ngOnInit() {
  }
  updateData(){
    this.loader = true
  }
  updateDataTwo(){
    this.loaderTwo = true
  }

}
