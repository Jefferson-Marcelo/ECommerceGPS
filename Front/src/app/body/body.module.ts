import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProductComponent } from './product/product.component';
import { ShowBodyComponent } from './show-body/show-body.component';
import {HeaderModule} from "../header/header.module";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "../app-routing.module";
import {PipesModule} from "../shared/pipes/pipes.module";
import {MatBadgeModule} from "@angular/material/badge";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BreadcrumbModule} from "angular-crumbs";
import {BrowserModule} from "@angular/platform-browser";
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
    declarations: [
        HeaderComponent,
        ProductComponent,
        ProductRegistrationComponent,
        SidebarComponent,
        ShowBodyComponent,

    ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    ProductComponent,
    ProductRegistrationComponent,
    ShowBodyComponent
  ],
    imports: [
        CommonModule,
        HeaderModule,
        MatCardModule,
        MatIconModule,
        AppRoutingModule,
        PipesModule,
        MatBadgeModule,
        MatFormFieldModule,
        FormsModule,
        FlexModule,
        MatInputModule,
        MatListModule,
        MatSidenavModule,
        BrowserModule,
        BreadcrumbModule,
        MatCheckboxModule
    ]
})
export class BodyModule { }
