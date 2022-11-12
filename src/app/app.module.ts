import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './intro/background/background.component';
import { IntroComponent } from './intro/intro-main/intro.component';
import { IntroTextComponent } from './intro/intro-text/intro-text.component';
import { ProjectMainComponent } from './projects/project-main/project-main.component';
import { StudiesExperiencesMainComponent } from './studies-experiences/studies-experiences-main/studies-experiences-main.component';
import { SkillsMainComponent } from './skills/skills-main/skills-main.component';
import { AboutMeMainComponent } from './about-me/about-me-main/about-me-main.component';
import { ScrollTopComponent } from './other/scroll-top/scroll-top.component';
import { StudiesListComponent } from './studies-experiences/studies-list/studies-list.component';
import { ExpriencesListComponent } from './studies-experiences/expriences-list/expriences-list.component';
import { NavbarComponent } from './intro/navbar/navbar.component';
import { SectionButtonComponent } from './intro/navbar/section-button/section-button.component';
import { DonutGraphComponent } from './donut-graph/donut-graph.component';


@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    IntroComponent,
    IntroTextComponent,
    ProjectMainComponent,
    StudiesExperiencesMainComponent,
    SkillsMainComponent,
    AboutMeMainComponent,
    ScrollTopComponent,
    StudiesListComponent,
    ExpriencesListComponent,
    NavbarComponent,
    SectionButtonComponent,
    DonutGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
