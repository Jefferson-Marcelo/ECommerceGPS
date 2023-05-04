import { AppRoutingModule } from './app-routing.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HeaderModule} from "./header/header.module";
import {MatIconModule} from "@angular/material/icon";
import {BodyModule} from "./body/body.module";
import {FirestoreModule} from "./firestore/firestore.module";
import { UserComponent } from './user/user.component';
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [AppComponent, UserComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    HeaderModule,
    MatIconModule,
    BodyModule,
    AppRoutingModule,
    FirestoreModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
