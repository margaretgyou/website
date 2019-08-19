import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {AboutComponent} from '../about/about.component';
import {NotesComponent} from '../notes/notes.component';
import {OtherComponent} from '../other/other.component';
import {ProjectsComponent} from '../projects/projects.component';
import {C307Component} from '../notes/courses/c307/c307.component';
import {C330Component} from '../notes/courses/c330/c330.component';
import {C417Component} from '../notes/courses/c417/c417.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'notes', component: NotesComponent, children: [
      {path: 'C307', component: C307Component},
      {path: 'C330', component: C330Component},
      {path: 'C417', component: C417Component},
    ]},
  {path: 'other', component: OtherComponent},
  {path: 'projects', component: ProjectsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
