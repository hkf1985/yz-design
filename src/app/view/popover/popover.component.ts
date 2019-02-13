import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.less']
})
export class PopoverComponent implements OnInit {
  data = [
    {
      attr:'[showPop]',
      explain:"控制气泡的显示与否",
      type:"boolean",
      default:"false "
    },
    {
      attr:'[popIcon]',
      explain:"popover图标",
      type:'string',
      default:"more2"
    },
    {
      attr:'[popList]',
      explain:"右边栏填充内容，可以标签，组件等",
      type:'TemplateRef<any>',
      default:"没有默认值 "
    },
    {
      attr:'(closedPop)',
      explain:"回调函数，",
      type:'EventEmitter<any>',
      default:"没有默认值 "
    }

  ]
  dataItem=[
    {
      attr:'[link]',
      explain:"路由导航",
      type:"string",
      default:"没有默认值 "
    },
    {
      attr:'[iconType]',
      explain:"popover图标",
      type:'string',
      default:"没有默认值"
    }

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
