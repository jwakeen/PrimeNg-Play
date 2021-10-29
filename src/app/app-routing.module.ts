import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupFormComponent } from './group-form/group-form.component';
import { SingleFormComponent } from './single-form/single-form.component';

const routes: Routes = [
  { path: 'single-form', component: SingleFormComponent },
  { path: 'group-form', component: GroupFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
