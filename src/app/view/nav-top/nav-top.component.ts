import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.less']
})
export class NavTopComponent implements OnInit {
  data = [
    {
      attr:'[type]',
      explain:"导航类型主要是颜色上的区分,分别是default primary dark red",
      type:"string",
      default:"default "
    },
    {
      attr:'[leftContent]',
      explain:"左边栏填充内容，可以标签，组件等",
      type:'TemplateRef<any>',
      default:"没有默认值 "
    },
    {
      attr:'[rightContent]',
      explain:"右边栏填充内容，可以标签，组件等",
      type:'TemplateRef<any>',
      default:"没有默认值 "
    },
    {
      attr:'（leftClick）',
      explain:"展开回调,即左边添加内容后的点击事件",
      type:'EventEmitter<any>',
      default:"没有默认值 "
    },
    {
      attr:'（rightClick）',
      explain:"展开回调,即右边添加内容后的点击事件",
      type:'EventEmitter<any>',
      default:"没有默认值 "
    },

  ]

  popLists=[
    {
      type:'home',
      link:'home',
      title:'首页'
    },
    {
      type:'home2',
      link:'home',
      title:'首页2'
    },
    {
      type:'home3',
      link:'home',
      title:'首页3'
    }
  ]
  constructor() { }
  showPopList:boolean = false;
  ngOnInit() {
  }
  lookPop(){
    this.showPopList = true;
  }
  hidePopover(e){
    e.stopPropagation()
    this.showPopList = false
  }
}
