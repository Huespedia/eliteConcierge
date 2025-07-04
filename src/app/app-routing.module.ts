import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HomeEnComponent } from './pages/homeEn/home-en/home-en.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'',pathMatch:'full', redirectTo:'home'},
  {path:'home-en',component:HomeEnComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
