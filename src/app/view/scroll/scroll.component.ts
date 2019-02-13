import { Component, OnInit } from '@angular/core';
import {News} from "./News";

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.less']
})
export class ScrollComponent implements OnInit {
  data = [
    {
      attr:'[maxIndex]',
      explain:"首次加载数据后，确定列表页的最大页面数，必填",
      type:"number",
      default:"无 "
    },
    {
      attr:'[url]',
      explain:"请求数据加载的地址，必填",
      type:"string",
      default:"无 "
    },
    {
      attr:'[pageIndex]',
      explain:"最新加载的页面",
      type:"number",
      default:"0 "
    },
    {
      attr:"[params]",
      explain:"数据加载参数，其中pageIndex键不可修改",
      type:"dictionaries",
      default:"{pageIndex:0,\n pageSize:10}"

    },
    {
      attr:'(resultData)',
      explain:"数据加载的方法，通过$event可以获取到更新后的数据",
      type:"EventEmitter",
      default:"无默认值 "
    }
  ]

  newsList:News[] = [];
  pageIndex:number=0;
  news:News= new News();

  constructor() { }

  ngOnInit() {
  }
  resultData(e,p){
    console.log(e,p)
    if(p == 0){
      //this.maxIndex=e.dataMap.maxIndex;
      this.newsList = [];
    }

    let data = e.newsList;
    // let dataLists:any = [];
    for(let i=0;i<data.length;i++){
      this.news.newsMainPic=data[i].newsMainPic;
      this.news.publishTime=data[i].publishTime
      this.news.webNewsTitle=data[i].webNewsTitle
      this.news.newsBrief=data[i].newsBrief
      this.news.webNewsId=data[i].webNewsId
      this.news.titleLink=data[i].titleLink
      console.log("thisNews",this.news)
      this.newsList.push(this.news)
      //this.newsList.push(data[i])
    }
  }
}
