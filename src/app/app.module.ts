import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FilterComponent } from './filters/appFilter';
import { cartComponent } from './cart/appcart';
import { showItemsComponent} from './showItems/appshowItems';
import {ItemsService} from './app.items.service';
import {showItemsSpecific} from './showItemsSpecific/showItemsSpecific';

const appRoutes = [
  {pathMatch: 'full',path : 'kitchenItems',component :showItemsComponent},
  {pathMatch: 'full',path : 'vegetables' , component :showItemsComponent},
  {pathMatch: 'full',path : 'toys' , component :showItemsComponent},
  {pathMatch: 'full',path : 'studyMaterials' , component :showItemsComponent}
]

@NgModule({
  declarations: [
    FilterComponent,
    cartComponent,
    showItemsComponent,
    showItemsSpecific
  ],
  bootstrap: [
    FilterComponent,
    showItemsSpecific,
    cartComponent
  ],
  providers:[
    ItemsService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ]
})
export class AppModule {}