import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavigatorComponent } from './navigator/navigator.component';
import {MatMenuModule} from "@angular/material/menu";
import {AppRoutingModule} from "../app-routing.module";
import { ShowHeaderComponent } from './show-header/show-header.component';
import {FlexModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";





@NgModule({
    declarations: [
        MenuComponent,
        NavigatorComponent,
        ShowHeaderComponent,



    ],
  exports: [
    MenuComponent,
    NavigatorComponent,
    ShowHeaderComponent,

  ],
    imports: [
      CommonModule,
      FlexModule,
      AppRoutingModule,
      MatIconModule,
      MatInputModule,
      MatMenuModule,
    ]
})
export class HeaderModule { }
