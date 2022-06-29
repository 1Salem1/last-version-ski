import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkiBaseLineComponent } from './ski-base-line/ski-base-line.component';
const routes: Routes = [
  { path: '', component: SkiBaseLineComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
