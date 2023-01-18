import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDialogModule } from '@angular/material/dialog';

import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './intro/background/background.component';
import { IntroComponent } from './intro/intro.component';
import { IntroTextComponent } from './intro/intro-text/intro-text.component';
import { ProjectComponent } from './project/project.component';
import { StudiesExperiencesComponent } from './studies-experiences/studies-experiences.component';
import { SkillsComponent } from './skills/skills.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ScrollTopComponent } from './other/scroll-top/scroll-top.component';
import { StudiesListComponent } from './studies-experiences/studies-list/studies-list.component';
import { ExpriencesListComponent } from './studies-experiences/expriences-list/expriences-list.component';
import { NavbarComponent } from './intro/navbar/navbar.component';
import { SectionButtonComponent } from './intro/navbar/section-button/section-button.component';
import { DonutGraphComponent } from './skills/donut-graph/donut-graph.component';
import { DisplayLangComponent } from './skills/display-lang/display-lang.component';
import { GithubEmbededComponent } from './project/github-embeded/github-embeded.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopupWipComponent } from './other/popup-wip/popup-wip.component';
import { EseoInfoComponent } from './about-me/eseo-info/eseo-info.component';
import { TabsComponent } from './skills/tabs/tabs.component';
import { ContactMeComponent } from './about-me/contact-me/contact-me.component';
import { ContactFormComponent } from './about-me/contact-me/contact-form/contact-form.component';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    IntroComponent,
    IntroTextComponent,
    ProjectComponent,
    StudiesExperiencesComponent,
    SkillsComponent,
    AboutMeComponent,
    ScrollTopComponent,
    StudiesListComponent,
    ExpriencesListComponent,
    NavbarComponent,
    SectionButtonComponent,
    DonutGraphComponent,
    DisplayLangComponent,
    GithubEmbededComponent,
    PopupWipComponent,
    EseoInfoComponent,
    TabsComponent,
    ContactMeComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
