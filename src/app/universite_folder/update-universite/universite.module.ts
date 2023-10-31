import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversiteRoutingModule } from './universite-routing.module';
import { UniversiteComponent } from './universite/universite.component';
import { ListUniversiteComponent } from './list-universite/list-universite.component';
import { UpdateUniversiteComponent } from './update-universite.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UniversiteComponent,
    ListUniversiteComponent,
    UpdateUniversiteComponent
  ],
  imports: [
    CommonModule,
    UniversiteRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[UniversiteComponent,
    ListUniversiteComponent,
    UpdateUniversiteComponent]
})
export class UniversiteModule { }
