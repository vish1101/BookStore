import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './component/form/form.component';
import { LoginComponent } from './component/login/login.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'form',component:FormComponent},
  {path:'welcome',component:WelcomePageComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
