import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturedComponent } from './featured/featured.component';
import { DashGuard } from './guard/dash.guard';

const routes: Routes = [
  {
    path:'',component:FeaturedComponent,
    canActivate:[DashGuard],
    children:[
      {
        path:'dashboard',
        loadChildren:()=>import('./dashboard/dashboard.module').then(m=>m.DashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedRoutingModule { }
