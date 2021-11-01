import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GroupFormComponent } from './group-form/group-form.component';
import { NativeReactiveFormComponent } from './native-reactive-form/native-reactive-form.component';
import { NativeReactiveGroupFormComponent } from './native-reactive-group-form/native-reactive-group-form.component';
import { SingleFormComponent } from './single-form/single-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SingleFormComponent,
    GroupFormComponent,
    NativeReactiveFormComponent,
    NativeReactiveGroupFormComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
