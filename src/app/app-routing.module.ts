import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkiBaseLineComponent } from './ski-base-line/ski-base-line.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SplitboardBaseLineComponent } from './splitboard-base-line/splitboard-base-line.component';
const routes: Routes = [

  { path: 'ski', component: SkiBaseLineComponent},
  { path: 'splitboard', component: SplitboardBaseLineComponent},
  { path: '', component: HomeComponentComponent },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
