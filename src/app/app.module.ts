import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { NgModule } from '@angular/core';
import {NgRoseModule} from 'ng-rose-mobile'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { RightNavComponent } from './component/right-nav/right-nav.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './view/button/button.component';
import { IconViewComponent } from './view/icon-view/icon-view.component';
import { MobileViewComponent } from './component/mobile-view/mobile-view.component';
import { NavTopComponent } from './view/nav-top/nav-top.component';
import { PopoverComponent } from './view/popover/popover.component';
import { ScrollComponent } from './view/scroll/scroll.component';
import { PageReloadComponent } from './view/page-reload/page-reload.component';
import { UploadImgComponent } from './view/upload-img/upload-img.component';
import { FlexComponent } from './view/flex/flex.component';
import { FlexItemComponent } from './view/flex-item/flex-item.component';


@NgModule({
  declarations: [
    AppComponent,
    RightNavComponent,
    ButtonComponent,
    IconViewComponent,
    MobileViewComponent,
    NavTopComponent,
    PopoverComponent,
    ScrollComponent,
    PageReloadComponent,
    UploadImgComponent,
    FlexComponent,
    FlexItemComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgRoseModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
