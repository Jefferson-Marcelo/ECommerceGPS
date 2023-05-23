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
import { UserComponent } from './user/user.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'environments/environment';
import {MatCheckboxModule } from '@angular/material/checkbox';

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
    AngularFireModule.initializeApp(environment.firebase),
    MatFormFieldModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
