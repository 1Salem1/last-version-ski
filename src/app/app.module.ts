import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkiStep1Component } from './ski-step1/ski-step1.component';
import { SkiStep2Component } from './ski-step2/ski-step2.component';
import { SkiStep3Component } from './ski-step3/ski-step3.component';
import { SkiStep4Component } from './ski-step4/ski-step4.component';
import { SkiStep5Component } from './ski-step5/ski-step5.component';
import { SkiBaseLineComponent } from './ski-base-line/ski-base-line.component';
import { SplitStep1Component } from './split-step1/split-step1.component';
import { SplitStep2Component } from './split-step2/split-step2.component';
import { SplitStep3Component } from './split-step3/split-step3.component';
import { SplitStep4Component } from './split-step4/split-step4.component';
import { SplitStep5Component } from './split-step5/split-step5.component';
import { SplitboardBaseLineComponent } from './splitboard-base-line/splitboard-base-line.component';
import { HomeComponentComponent } from './home-component/home-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SkiStep1Component,
    SkiStep2Component,
    SkiStep3Component,
    SkiStep4Component,
    SkiStep5Component,
    SkiBaseLineComponent,
    SplitStep1Component,
    SplitStep2Component,
    SplitStep3Component,
    SplitStep4Component,
    SplitStep5Component,
    SplitboardBaseLineComponent,
    HomeComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
