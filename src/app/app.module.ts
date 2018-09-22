import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';

import { environment } from '../environments/environment';
import { OneComponent } from './chapters/1-one/one.component';
import { TwoComponent } from './chapters/2-two/two.component';
import { ThreeComponent } from './chapters/3-three/three.component';
import { FourComponent } from './chapters/4-four/four.component';
import { FiveComponent } from './chapters/5-five/five.component';
import { SixComponent } from './chapters/6-six/six.component';
import { SevenComponent } from './chapters/7-seven/seven.component';
import { EightComponent } from './chapters/8-eight/eight.component';
import { NineComponent } from './chapters/9-nine/nine.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent,
    NineComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
