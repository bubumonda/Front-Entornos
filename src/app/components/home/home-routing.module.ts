import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudDatasetsComponent } from './components/crud-datasets/crud-datasets.component';
import { FormDatasetsComponent } from './components/form-datasets/form-datasets.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [

  {path:'', component:LayoutComponent,
  children:[
    {path:'crud-datasets', component:CrudDatasetsComponent},
    {path:'crear', component:FormDatasetsComponent},
    {path:'editar/:id', component:FormDatasetsComponent},
    {path:'**', redirectTo:'crud-datasets'}

  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
