import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FirstSectionComponent } from './components/first-section/first-section.component';
import { HeaderComponent } from './components/header/header.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FirstSectionComponent,
    HeaderComponent,
    SkillsComponent,
    ExperienciaComponent,
    AboutmeComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
