import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { FormComponent } from './component/form/form.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './Service/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    WelcomePageComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
