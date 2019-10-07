import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TitlePipe } from 'src/pipes/title.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/modules/material.module';
import { BgColorDirective } from 'src/directives/bg-color.directive';
import { IconDirective } from 'src/directives/icon.directive';

@NgModule({
  declarations: [
    AppComponent,
    TitlePipe,
    BgColorDirective,
    IconDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
