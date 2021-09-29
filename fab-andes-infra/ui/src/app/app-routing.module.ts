import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsSideNavComponent } from './components/projects-side-nav/projects-side-nav.component';


const routes: Routes = [
  {
    path: '', component: ProjectsSideNavComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
