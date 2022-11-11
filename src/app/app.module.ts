import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './intro/background/background.component';
import { IntroComponent } from './intro/intro-main/intro.component';
import { IntroTextComponent } from './intro/intro-text/intro-text.component';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    IntroComponent,
    IntroTextComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
