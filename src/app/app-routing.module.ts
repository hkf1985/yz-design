import { NgModule } from '@angular/core';
import {Routes,RouterModule} from "@angular/router";

import { ButtonComponent} from "./view/button/button.component";
import {IconViewComponent} from "./view/icon-view/icon-view.component";
import {NavTopComponent} from "./view/nav-top/nav-top.component";
import {PopoverComponent} from "./view/popover/popover.component"
import {ScrollComponent} from "./view/scroll/scroll.component";
import {PageReloadComponent} from "./view/page-reload/page-reload.component";
import {UploadImgComponent} from "./view/upload-img/upload-img.component";
import {FlexComponent} from "./view/flex/flex.component";
import {FlexItemComponent} from "./view/flex-item/flex-item.component";

const routes:Routes = [
  {path:'',component:ButtonComponent},
  {path:'navTop',component:NavTopComponent},
  {path:'popover',component:PopoverComponent},
  {path:'flex',component:FlexComponent},
  {path:'flexItem',component:FlexItemComponent},
  {path:'icon',component:IconViewComponent},
  {path:'scroll',component:ScrollComponent},
  {path:'pageReload',component:PageReloadComponent},
  {path:'uploadImg',component:UploadImgComponent},
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes,{enableTracing:false})
  ],
  declarations: [
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
