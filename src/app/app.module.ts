import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './article/not-found/not-found.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { UniversiteItemComponent } from './universite_folder/update-universite/universite-item/universite-item.component';
import { AfficheUniversiteComponent } from './universite_folder/update-universite/affiche-universite/affiche-universite.component';
import { AddStoreComponent } from './Store/add-store/add-store.component';
import { ListStoreComponent } from './Store/list-store/list-store.component';
import { EditStoreComponent } from './Store/edit-store/edit-store.component';
import { AddOrderComponent } from './order_folder/addorder/addorder.component';
import { OrderListComponent } from './order_folder/order-list/order-list.component';
import { ModifyOrderComponent } from './order_folder/modifyorder/modifyorder.component';












@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UniversiteItemComponent,
    AfficheUniversiteComponent,
    AddStoreComponent,
    ListStoreComponent,
    EditStoreComponent,
    AddOrderComponent,
    OrderListComponent,
    ModifyOrderComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
