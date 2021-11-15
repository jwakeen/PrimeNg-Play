import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { NativeReactiveFormComponent } from './native-reactive-form/native-reactive-form.component';
import { NativeReactiveGroupFormComponent } from './native-reactive-group-form/native-reactive-group-form.component';
import { SingleFormComponent } from './single-form/single-form.component';
import { VarietyFormComponent } from './variety-form/variety-form.component';

const routes: Routes = [
  { path: 'single-form', component: SingleFormComponent },
  { path: 'group-form', component: GroupFormComponent },
  { path: 'native-reactive-form', component: NativeReactiveFormComponent },
  {
    path: 'native-reactive-group-form',
    component: NativeReactiveGroupFormComponent,
  },
  { path: 'variety-form', component: VarietyFormComponent },
  { path: 'custom-form', component: CustomFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
