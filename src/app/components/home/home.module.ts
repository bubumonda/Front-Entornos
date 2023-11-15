import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { CrudDatasetsComponent } from './components/crud-datasets/crud-datasets.component';
import { MatCardModule } from '@angular/material/card';
import { FormDatasetsComponent } from './components/form-datasets/form-datasets.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrudDatasetsComponent,
    FormDatasetsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
