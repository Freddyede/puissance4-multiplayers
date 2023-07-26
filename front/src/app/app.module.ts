import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoads } from "./routes";
import { FilterComponent } from './filter/filter.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        FilterComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot(AppRoads)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
