import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { NativeReactiveFormComponent } from './native-reactive-form/native-reactive-form.component';
import { NativeReactiveGroupFormComponent } from './native-reactive-group-form/native-reactive-group-form.component';
import { SingleFormComponent } from './single-form/single-form.component';
import { VarietyFormComponent } from './variety-form/variety-form.component';
import { ListboxModule } from 'primeng/listbox';
import { CustomFormComponent } from './custom-form/custom-form.component';
import { CustomComponent } from './custom/custom.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleFormComponent,
    GroupFormComponent,
    NativeReactiveFormComponent,
    NativeReactiveGroupFormComponent,
    VarietyFormComponent,
    CustomFormComponent,
    CustomComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    InputNumberModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
    ListboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
