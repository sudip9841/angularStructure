import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'auth',
loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)},
{
  path:'featured',
  loadChildren:()=> import('./featured/featured.module').then(m=>m.FeaturedModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
