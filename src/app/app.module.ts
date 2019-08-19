import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {FormsModule} from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { NotesComponent } from './notes/notes.component';
import { AboutComponent } from './about/about.component';
import { C307Component} from './notes/courses/c307/c307.component';
import { C330Component} from './notes/courses/c330/c330.component';
import { C417Component} from './notes/courses/c417/c417.component';
import { OtherComponent } from './other/other.component';
import {AppRoutingModule} from './shared/app-routing.module';
import {APP_BASE_HREF} from '@angular/common';
import { NotesNavComponent } from './notes/notes-nav/notes-nav.component';
import { ProjectsNavComponent } from './projects/projects-nav/projects-nav.component';
import { C303Component } from './notes/courses/c303/c303.component';
import { AngComponent } from './notes/courses/ang/ang.component';
import { WebComponent } from './notes/courses/web/web.component';
import { AlgComponent } from './notes/courses/alg/alg.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProjectsComponent,
    NotesComponent,
    AboutComponent,
    OtherComponent,
    DropdownDirective,
    NotesNavComponent,
    ProjectsNavComponent,
    C307Component,
    C330Component,
    C417Component,
    C303Component,
    AngComponent,
    WebComponent,
    AlgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    PdfViewerModule,
    FormsModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
