import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturedRoutingModule } from './featured-routing.module';
import { FeaturedComponent } from './featured/featured.component';
import { FeaturedHeaderComponent } from './layout/featured-header/featured-header.component';
import { FeaturedFooterComponent } from './layout/featured-footer/featured-footer.component';


@NgModule({
  declarations: [
    FeaturedComponent,
    FeaturedHeaderComponent,
    FeaturedFooterComponent
  ],
  imports: [
    CommonModule,
    FeaturedRoutingModule
  ]
})
export class FeaturedModule { }
